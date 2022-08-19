import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';

const routes: Routes = [
  {
    path: 'logIn',
    component: LogInPageComponent
  },
  {
    path: 'signIn',
    component: LogInPageComponent
  },
  {
    path: '**',
    redirectTo: 'logIn'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }