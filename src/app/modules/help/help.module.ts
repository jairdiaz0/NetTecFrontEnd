import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HelpPageComponent
  ],
  imports: [
    CommonModule,
    HelpRoutingModule,
    SharedModule
  ]
})
export class HelpModule { }
