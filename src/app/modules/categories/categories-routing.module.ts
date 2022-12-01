import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieFilterPageComponent } from './pages/categorie-filter-page/categorie-filter-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPageComponent
  },
  {
    path: 'filter',
    component: CategorieFilterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
