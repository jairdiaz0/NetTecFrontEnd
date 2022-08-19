import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { PublicationsPageComponent } from './pages/publications-page/publications-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    PublicationsPageComponent
  ],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
    SharedModule
  ]
})
export class PublicationsModule { }
