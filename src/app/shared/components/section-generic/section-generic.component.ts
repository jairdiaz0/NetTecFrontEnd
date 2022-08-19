import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

// Importaciones
import { PreguntaModelMod } from '@core/models/api/preguntasMod.model.';
import { UsuarioModel } from '@core/models/api/usuarios.model';
import { PublicationsService } from '@modules/publications/services/publications.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit, OnDestroy {
  //Agregamos un Input a donde se mandarán los Post recientes.
  @Input() newPosts?: Array<PreguntaModelMod> = [];
  @Input() user?: UsuarioModel;
  private listObserver:Array<Subscription> = [];
  //Elementos de la página
  page = {
    "title" : 'Sección de Nuevas Publicaciones',
    "class" : ['titulo', 'h3']
  }

  buttonComment = {
    "title" : 'Ver Comentarios',
    "class" : ['btn', 'btn-outline-success', 'titulo', 'fw-bold', 'mt-2', 'me-2']
  }
  
  buttonAnswer = {
    "title" : 'Responder',
    "class" : ['btn', 'btn-outline-warning', 'titulo', 'fw-bold', 'mt-2']
  }

  //Constructor
  constructor(
    private publicationsService:PublicationsService
    ) {
  }

  //Método que se ejecuta al Inicio
  ngOnInit(): void {
    const observer1$ = this.publicationsService.postsServices$.subscribe(
      (post:PreguntaModelMod) => {
        this.newPosts?.unshift(post);
      }
    );
    this.listObserver.push(observer1$);
  }

  ngOnDestroy(): void {
    this.listObserver.forEach(u => u.unsubscribe);
  }

  /**Función que nos permite mostrar/ocultar AnswerBox */
  showAnswerBox(pregunta: PreguntaModelMod):void{
    pregunta.showAnswerBox = !pregunta.showAnswerBox; 
    if(pregunta.showAnswerBox){
      pregunta.showComments = true;
      this.checkObservable(pregunta);
    }
  }

  /**Función que nos permite mostrar/ocultar CommentBox */
  showCommentBox(pregunta: PreguntaModelMod):void{
    pregunta.showComments = !pregunta.showComments;
    if(pregunta.showComments){
      this.checkObservable(pregunta);
    }
  }

  /**Función que nos permite checar si existe un EventEmitter, en caso contrario lo crea */
  private checkObservable(pregunta:PreguntaModelMod):void{
    if(!pregunta.observableShared){
      pregunta.observableShared= new EventEmitter<any>;
    }
  }
}
