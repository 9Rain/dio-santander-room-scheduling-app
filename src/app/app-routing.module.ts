import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'rooms',
    pathMatch: 'full'
  },
  {
    path: 'rooms/new',
    loadChildren: () => import('@page/room-create/room-create-page.module').then(m => m.RoomCreatePageModule),
  },
  {
    path: 'rooms/:id/edit',
    loadChildren: () => import('@page/room-update/room-update-page.module').then(m => m.RoomUpdatePageModule)
  },
  {
    path: 'rooms/:id',
    loadChildren: () => import('@page/room-detail/room-detail-page.module').then(m => m.RoomDetailPageModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('@page/room-list/room-list-page.module').then(m => m.RoomListPageModule)
  },
  {
    path: '**',
    redirectTo: 'rooms',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
