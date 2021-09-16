import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomListPageComponent } from './room-list-page.component';

const routes: Routes = [{ path: '', component: RoomListPageComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomListPageRoutingModule { }
