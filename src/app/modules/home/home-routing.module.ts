import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'publications',
    loadChildren:() => import('@modules/publications/publications.module').then(m => m.PublicationsModule)
  },
  {
    path:'categories',
    loadChildren:() => import('@modules/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path:'contactUs',
    loadChildren:() => import('@modules/help/help.module').then(m => m.HelpModule)
  },
  {
    path:'**',
    redirectTo: 'publications'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
