import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { RoomService } from '@core/service/room.service';
import { Room } from '@core/model/room.model';

@Injectable()
export class RoomListService {

  private roomList = new BehaviorSubject<Room[]>([]);

  constructor(private roomService: RoomService) { }

  get list$(): Observable<Room[]> {
    return this.roomList.asObservable();
  }

  set list(value: Room[]) {
    this.roomList.next(value);
  }

  create(room: Room): Promise<void> {
    return new Promise((resolve: () => void, reject: () => void): Subscription =>
      this.roomService.create(room)
        .subscribe({
          next: todo => {
            this.list = [todo, ...this.roomList.value];
            resolve();
          },
          error: err => {
            console.error(err);
            reject();
          }
        })
    );
  }

  get(id: number): void {
    this.roomService.get(id)
      .subscribe({
        next: room => {
          if(this.roomList.value.find(r => r.id === room.id)) {
            this.list = this.roomList.value
              .map(item => item.id === room.id ? room : item);
          }
          else { this.list = [room, ...this.roomList.value]; }
        },
        error: err => console.error(err)
      });
  }

  getList(): void {
    this.roomService.getList()
      .subscribe({
        next: list => this.list = list,
        error: err => console.error(err)
      });
  }

  update(id: number, room: Room): Promise<void> {
    return new Promise((resolve: () => void, reject: () => void): Subscription =>
      this.roomService.update(id, room)
        .subscribe({
          next: (updatedRoom) => {
            this.list = this.roomList.value
              .map(item => item.id === updatedRoom.id ? updatedRoom : item);
            resolve();
          },
          error: (err) => {
            console.error(err);
            reject();
          }
        })
      );
  }

  delete(id: number): void {
    this.roomService.delete(id)
      .subscribe({
        next: () => this.list = this.roomList.value.filter(item => item.id !== id),
        error: err => console.error(err)
      });
  }
}
