import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomCreatePageComponent } from './room-create-page.component';

const routes: Routes = [{ path: '', component: RoomCreatePageComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomCreatePageRoutingModule { }
