import { Component, OnInit } from '@angular/core';

import { RoomListService } from '@feature/room-schedule/service/room-list.service';
import { Room } from '@core/model/room.model';

@Component({
  selector: 'app-room-schedule-list',
  templateUrl: './room-schedule-list.component.html',
  styleUrls: ['./room-schedule-list.component.scss']
})
export class RoomScheduleListComponent implements OnInit {

  rooms: Room[];

  constructor(private roomListService: RoomListService) {}

  ngOnInit(): void {
    this.roomListService.getList();
    this.syncState();
  }

  syncState(): void {
    this.roomListService.list$
      .subscribe({
        next: roomList => {
          this.rooms = roomList;
        },
        error: err => console.error(err)
      });
  }

  deleteRoom(id: number): void {
    if(confirm('Do you really want to delete this room?\nThis action can not be undone')) {
      this.roomListService.delete(id);
    }
  }
}
