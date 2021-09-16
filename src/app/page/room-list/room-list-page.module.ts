import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@feature/layout/layout.module';
import { RoomScheduleModule } from '@feature/room-schedule/room-schedule.module';
import { RoomListPageComponent } from './room-list-page.component';
import { RoomListPageRoutingModule } from './room-list-page-routing.module';


@NgModule({
  declarations: [RoomListPageComponent],
  imports: [
    CommonModule,
    RoomScheduleModule,
    LayoutModule,
    RoomListPageRoutingModule
  ]
})
export class RoomListPageModule { }
