import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RoomListService } from '@feature/room-schedule/service/room-list.service';
import { Room } from '@core/model/room.model';

@Component({
  selector: 'app-room-schedule-create',
  templateUrl: './room-schedule-create.component.html',
  styleUrls: ['./room-schedule-create.component.scss']
})
export class RoomScheduleCreateComponent {

  room = {
    name: '',
    date: '',
    startHour: '',
    endHour: ''
  } as Room;

  submitted = false;

  constructor(private router: Router,
              private roomListService: RoomListService) {}

  newRoom(): void {
    this.submitted = false;
    this.room = {
      name: '',
      date: '',
      startHour: '',
      endHour: ''
    } as Room;
  }

  save(): void {
    this.roomListService.create(this.room)
      .then(() => this.gotoList());
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['/rooms']);
  }
}
