import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaModel } from '@core/models/api/categorias.model';
import { PreguntaModelMod } from '@core/models/api/preguntasMod.model.';
import { CategorieFilterPageComponent } from '@modules/categories/pages/categorie-filter-page/categorie-filter-page.component';
import { TmpService } from '@modules/categories/services/tmp.service';

@Component({
  selector: 'app-cards-categories',
  templateUrl: './cards-categories.component.html',
  styleUrls: ['./cards-categories.component.css'],
})
export class CardsCategoriesComponent implements OnInit {
  @Input() categoria?: CategoriaModel;
  @Input() mockPostList?: Array<PreguntaModelMod>;

  button = {
    title: 'Entrar',
    class: ['btn', 'btn-outline-success'],
    classContainer: ['d-flex', 'justify-content-end'],
  };

  constructor(private router:Router, private tmp:TmpService) {}

  ngOnInit(): void {}

  /**Método que nos permite ir a la categoria indicada */
  goToCategorie(): void {
    let filter = this.mockPostList?.filter(
      (data) => data.subcategoria?.id_categoria == this.categoria?.id_categoria
    );
    this.tmp.mockPostList = filter;
    this.router.navigate(['home', 'categories', 'filter']);
  }
}
