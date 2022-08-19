import { Component, Input, OnInit } from '@angular/core';

/*Importamos datos de un json*/
import * as dataRaw from '@data/categories.json';

/*Importaciones*/
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PreguntaModel } from '@core/models/api/preguntas.model';
import { PublicationsService } from '@modules/publications/services/publications.service';
import { CategoriaModel } from '@core/models/api/categorias.model';
import { AlertModel } from '@core/models/more/alerts.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from '@core/models/api/usuarios.model';
import { ConnectionDBService } from '@shared/services/connection-db.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Input() user?:UsuarioModel;
  formPost: FormGroup = new FormGroup({});
  mockCategorias?:Array<CategoriaModel> = []
  showAlert = false;
  alert: AlertModel = {
    "flag": false,
    "title_true": 'Post Enviado con Éxito',
    "title_false": 'Favor de verificar los campos del Post',
    "class_true": ['alert', 'alert-success'],
    "class_false": ['alert', 'alert-danger']
  }
  page = {
    "title" : 'Nueva Entrada',
    "class" : ['titulo', 'h3']
  }
  post = {
    "title" : 'Título de la Entrada',
    "class" : ['form-control', 'titulo', 'texto'],
    "text" : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, molestiae quidem sequi officia tempore, unde incidunt magnam omnis nulla eveniet autem quo rerum non minus corporis, culpa iure voluptates. Soluta!'
  }
  select = {
    "class" : ['form-select', 'form-select-sm', 'mb-3', 'titulo'],
    "defaultOption_title" : 'Seleccionar Categoria: '
  }
  button = {
    "title" : 'Enviar',
    "class" : ['btn', 'btn-primary', 'fw-bold', 'titulo', 'text-white', 'mt-2']
  }

  constructor(
    private publicationsService:PublicationsService, 
    private connectionDBService:ConnectionDBService
    ) { }

  ngOnInit(): void {
    this.getCategorias();
    this.formPost = new FormGroup(
      {
        titulo_entrada: new FormControl('', [
          Validators.required,
          Validators.minLength(5)
        ]),
        post: new FormControl('',[
          Validators.required,
          Validators.minLength(8)
        ]),
        categorie: new FormControl('',[
          Validators.required
        ])
      }
    )
  }

  /**Función que nos permite obtener las categorias */
  private async getCategorias(){
      this.mockCategorias = await this.connectionDBService.getCategorias();
  }

  /**Función que nos permite enviar el POST */
  sendPost(): void{
    this.showAlert=true;
    if(this.alert.flag = this.formPost.valid){
      const { titulo_entrada, post, categorie } = this.formPost.value;
      const pregunta:PreguntaModel = {
        "titulo": titulo_entrada,
        "descripcion": post,
        "id_subcategoria": categorie,
        "usuario": this.user,
        "subcategoria": {
            "titulo_subcategoria": this.getTituloCategoria(categorie)
        }
      }
      this.publicationsService.postsServices$.emit(pregunta);
      this.resetForm();
    }
  }

  //**Función que nos permite obtener el titulo de la categoria */
  private getTituloCategoria(id_subcategoria:String){
    var title = 'NaN';
    if(this.mockCategorias){
      this.mockCategorias.forEach(
        categorie => {
          if(categorie.id_categoria == id_subcategoria){
            title = categorie.titulo_categoria;
          }
        }
      )
    }
    return title;
  }

  /**Función que nos permite resetear los elementos del Form */
  private resetForm():void{
    this.formPost.reset();
  }
}
