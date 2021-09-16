import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomUpdatePageComponent } from './room-update-page.component';

const routes: Routes = [{ path: '', component: RoomUpdatePageComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomUpdatePageRoutingModule { }
