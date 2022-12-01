import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CategorieFilterPageComponent } from './pages/categorie-filter-page/categorie-filter-page.component';


@NgModule({
  declarations: [
    CategoriesPageComponent,
    CategorieFilterPageComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  ]
})
export class CategoriesModule { }
