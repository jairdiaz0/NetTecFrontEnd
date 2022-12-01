import { Component, Input, OnInit } from '@angular/core';
import { PreguntaModelMod } from '@core/models/api/preguntasMod.model.';
import { RespuestaModel } from '@core/models/api/respuestas.model';
import { UsuarioModel } from '@core/models/api/usuarios.model';

@Component({
  selector: 'app-comment-model',
  templateUrl: './comment-model.component.html',
  styleUrls: ['./comment-model.component.css']
})
export class CommentModelComponent implements OnInit {
  @Input() pregunta?:PreguntaModelMod;
  @Input() respuesta?:RespuestaModel;
  @Input() user?:UsuarioModel;
  userNotFound = 'Usuario No Encontrado';
  button = {
    "title": '❤️',
    "class": ['btn', 'btn-outline-danger', 'btn-sm', 'me-3']
  }

  constructor() { }

  ngOnInit(): void {
    if(this.respuesta){
      this.respuesta.id_users_like = this.getUsersLikeList();
    }
    this.userLikeComment();
  }

  /**Función para obtener la lista de usuarios que le dieron Like a la respuesta */
  private getUsersLikeList(): number[]{
    return []
  }

  /**Función para obtener el nombre de usuario */
  getUserName():String{
    const persona = this.respuesta?.usuario?.persona;
    if(persona?.nombre){
      return persona.nombre + ' ' + persona.apellido_paterno + ' ' + persona.apellido_materno;
    }
    return this.userNotFound;
  }

  /**Función para que un usuario le de like al comentario */
  likeComment():void{
    if(!this.userLikeComment() && this.respuesta && this.user?.id_usuario){
      this.respuesta.id_users_like?.push(this.user?.id_usuario);
      this.respuesta.ranking++;
      this.changeLike();
    }
  }

  /**Función que checa si el usuario le ha dado like al comentario */
  userLikeComment():boolean{
    if(this.respuesta && this.user?.id_usuario){
      if(this.respuesta.id_users_like?.includes(this.user?.id_usuario)){
        this.changeLike();
        return true;
      }
    }
    return false;
  }

  /**Función para cambiar el estilo del botón Like */
  changeLike():void{
    this.button.class.push('btn-danger');
    this.button.title = '🤍';
  }
}
