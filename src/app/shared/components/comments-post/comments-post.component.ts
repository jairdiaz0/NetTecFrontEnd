import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';

/*Importaciones*/
import { RespuestaModel } from '@core/models/api/respuestas.model';
import { Subscription } from 'rxjs';

/*Importaciones desde un .json*/
import * as dataRaw from '@data/respuestas.json';
import { PreguntaModelMod } from '@core/models/api/preguntasMod.model.';
import { ConnectionDBService } from '@shared/services/connection-db.service';
import { UsuarioModel } from '@core/models/api/usuarios.model';
import { AlertModel } from '@core/models/more/alerts.model';

@Component({
  selector: 'app-comments-post',
  templateUrl: './comments-post.component.html',
  styleUrls: ['./comments-post.component.css']
})
export class CommentsPostComponent implements OnInit, OnDestroy {

  @Input() pregunta?: PreguntaModelMod;
  @Input() user?: UsuarioModel;
  private listObservers:Subscription[] = [];
  respuestasArr?: Array<RespuestaModel>;
  showAlert:boolean = false;
  alert: AlertModel = {
    "flag": false,
    "title_true": '',
    "title_false": 'Sin Comentarios',
    "class_true": [],
    "class_false": ['alert', 'alert-danger']
  }

  buttonDelete = {
    "title" : 'Eliminar Comentario',
    "class" : ['btn', 'btn-outline-danger', 'btn-sm', 'titulo', 'fw-bold', 'mt-2', 'me-auto']
  }

  constructor(
    private connectionDBService:ConnectionDBService
    ) { }

  ngOnInit(): void {
    if(this.pregunta){
      this.getRespuestas();
      if(this.pregunta.observableShared){
        const observer1$:Subscription = this.pregunta.observableShared.subscribe(
          (response:RespuestaModel) => {
            this.respuestasArr?.unshift(response);
          }
        );
        this.listObservers.push(observer1$);
      }
    }
  }

  ngOnDestroy(): void {
    this.listObservers.forEach(u => u.unsubscribe);
  }

  /**Función que nos permite obtener las respuestas de una pregunta */
  private async getRespuestas(){
    if(this.pregunta?.id_pregunta){
      this.respuestasArr = await this.connectionDBService.getRespuestas(this.pregunta.id_pregunta);
    }else{
      this.respuestasArr = [];
    }
  }

  noRespuestas(){
    return (this.respuestasArr?.length == 0);
  }

  checkUserPost(respuesta: RespuestaModel){
    console.log(respuesta)
    return this.user?.id_usuario == respuesta.id_usuario||this.user?.id_rol == 102;
  }

  deletePostTmp(respuesta:RespuestaModel){
    this.respuestasArr = this.respuestasArr?.filter((data)=>{return data != respuesta;})
  }
}
