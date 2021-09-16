import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomDetailPageComponent } from './room-detail-page.component';

const routes: Routes = [{ path: '', component: RoomDetailPageComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomDetailPageRoutingModule { }
