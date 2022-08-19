import { Component, Input, OnInit } from '@angular/core';
import { CategoriaModel } from '@core/models/api/categorias.model';

@Component({
  selector: 'app-cards-categories',
  templateUrl: './cards-categories.component.html',
  styleUrls: ['./cards-categories.component.css']
})
export class CardsCategoriesComponent implements OnInit {

  @Input() categoria?:CategoriaModel

  button = {
    "title" : 'Entrar',
    "class" : ['btn', 'btn-outline-success'],
    "classContainer" : ['d-flex', 'justify-content-end']
  }

  constructor() { }

  ngOnInit(): void {
  }

  /**Método que nos permite ir a la categoria indicada */
  goToCategorie():void{
    console.log("Ingresar a la categoria: ", this.categoria?.titulo_categoria)
  }

}
