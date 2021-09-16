import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Room } from '@core/model/room.model';

@Component({
  selector: 'app-room-schedule-list-item',
  templateUrl: './room-schedule-list-item.component.html',
  styleUrls: ['./room-schedule-list-item.component.scss']
})
export class RoomScheduleListItemComponent {

  @Input() room: Room;
  @Output() deleteRoom = new EventEmitter<number>();
}
