import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomScheduleModule } from '@feature/room-schedule/room-schedule.module';
import { LayoutModule } from '@feature/layout/layout.module';
import { RoomCreatePageComponent } from './room-create-page.component';
import { RoomCreatePageRoutingModule } from './room-create-page-routing.module';


@NgModule({
  declarations: [RoomCreatePageComponent],
  imports: [
    CommonModule,

    RoomScheduleModule,
    LayoutModule,
    RoomCreatePageRoutingModule
  ]
})
export class RoomCreatePageModule { }
