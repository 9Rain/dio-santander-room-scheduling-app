import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoomListService } from '@feature/room-schedule/service/room-list.service';
import { Room } from '@core/model/room.model';

@Component({
  selector: 'app-room-schedule-detail',
  templateUrl: './room-schedule-detail.component.html',
  styleUrls: ['./room-schedule-detail.component.scss']
})
export class RoomScheduleDetailComponent implements OnInit {

  id: number;
  room: Room;

  constructor(private route: ActivatedRoute,
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
}
