import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomScheduleModule } from '@feature/room-schedule/room-schedule.module';
import { LayoutModule } from '@feature/layout/layout.module';
import { RoomUpdatePageComponent } from './room-update-page.component';
import { RoomUpdatePageRoutingModule } from './room-update-page-routing.module';


@NgModule({
  declarations: [RoomUpdatePageComponent],
  imports: [
    CommonModule,

    RoomScheduleModule,
    LayoutModule,
    RoomUpdatePageRoutingModule
  ]
})
export class RoomUpdatePageModule { }
