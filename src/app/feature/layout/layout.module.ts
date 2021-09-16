import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LayoutFooterComponent } from './component/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from '@feature/layout/component/layout-header/layout-header.component';


@NgModule({
  declarations: [
    LayoutHeaderComponent,
    LayoutFooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    LayoutHeaderComponent,
    LayoutFooterComponent
  ],
})
export class LayoutModule { }
