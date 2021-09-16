import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RoomListService } from '@feature/room-schedule/service/room-list.service';
import { RoomScheduleListComponent } from '@feature/room-schedule/component/room-schedule-list/room-schedule-list.component';
import { RoomScheduleListItemComponent } from '@feature/room-schedule/component/room-schedule-list-item/room-schedule-list-item.component';
import { RoomScheduleDetailComponent } from '@feature/room-schedule/component/room-schedule-detail/room-schedule-detail.component';
import { RoomScheduleUpdateComponent } from '@feature/room-schedule/component/room-schedule-update/room-schedule-update.component';
import { RoomScheduleCreateComponent } from '@feature/room-schedule/component/room-schedule-create/room-schedule-create.component';


@NgModule({
  declarations: [
    RoomScheduleListComponent,
    RoomScheduleListItemComponent,
    RoomScheduleDetailComponent,
    RoomScheduleUpdateComponent,
    RoomScheduleCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    RoomListService
  ],
  exports: [
    RoomScheduleListComponent,
    RoomScheduleListItemComponent,
    RoomScheduleDetailComponent,
    RoomScheduleUpdateComponent,
    RoomScheduleCreateComponent
  ],
})
export class RoomScheduleModule { }
