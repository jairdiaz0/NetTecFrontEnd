import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**Importaciones */
import { AuthRoutingModule } from './auth-routing.module';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';


@NgModule({
  declarations: [
    LogInPageComponent,
    SignInPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
