import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RoomListService } from '@feature/room-schedule/service/room-list.service';
import { Room } from '@core/model/room.model';

@Component({
  selector: 'app-room-schedule-update',
  templateUrl: './room-schedule-update.component.html',
  styleUrls: ['./room-schedule-update.component.scss']
})
export class RoomScheduleUpdateComponent implements OnInit {

  id: number;
  room: Room;
  submitted = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private roomListService: RoomListService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];

    this.roomListService.get(this.id);

    this.syncState();
  }

  syncState(): void {
    this.roomListService.list$
      .subscribe({
        next: roomList => this.room = roomList.find(room => room.id === this.id),
        error: err => console.error(err)
      });
  }

  updateRoom(): void {
    this.roomListService.update(this.id, this.room)
    .then(() => this.gotoList());
  }

  onSubmit(): void {
    this.submitted = true;
    this.updateRoom();
  }

  gotoList(): void {
    this.router.navigate(['/rooms']);
  }
}
