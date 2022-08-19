import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

/*Importaciones*/
import { CategoriaModel } from '@core/models/api/categorias.model';

/*Importamos datos de un json*/
import * as dataRaw from '@data/categories.json';
import { ConnectionDBService } from '@shared/services/connection-db.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {
  mockCategorias?:Array<CategoriaModel> = []

  constructor(
    private _connectionDBService:ConnectionDBService
    ) { }

  ngOnInit(): void {
    this.setCategorias();
  }
  /**Obtenemos las categorias y las asignamos al Array */
  private async setCategorias(){
    this.mockCategorias = await this._connectionDBService.getCategorias();
  }
}
