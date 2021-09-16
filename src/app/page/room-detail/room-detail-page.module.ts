import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomScheduleModule } from '@feature/room-schedule/room-schedule.module';
import { LayoutModule } from '@feature/layout/layout.module';
import { RoomDetailPageComponent } from './room-detail-page.component';
import { RoomDetailPageRoutingModule } from './room-detail-page-routing.module';


@NgModule({
  declarations: [RoomDetailPageComponent],
  imports: [
    CommonModule,

    RoomScheduleModule,
    LayoutModule,
    RoomDetailPageRoutingModule
  ]
})
export class RoomDetailPageModule { }
