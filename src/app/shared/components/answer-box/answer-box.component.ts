import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';

/*Importaciones*/
import { PreguntaModelMod } from '@core/models/api/preguntasMod.model.';
import { RespuestaModel } from '@core/models/api/respuestas.model';
import { UsuarioModel } from '@core/models/api/usuarios.model';
import { ConnectionDBService } from '@shared/services/connection-db.service';
import { AnserBoxModelComponent } from '../anwser-box-model/answer-box-model.component';

@Component({
  selector: 'app-answer-box',
  templateUrl: './answer-box.component.html',
  styleUrls: ['./answer-box.component.css']
})
export class AnswerBoxComponent implements OnInit {
  @ViewChild('answerBoxModel') answerBoxModel?:AnserBoxModelComponent;
  @Input() pregunta?: PreguntaModelMod;
  @Input() user?: UsuarioModel;
  buttonAnswerSend = {
    "title" : 'Comentar',
    "class" : ['btn', 'btn-success', 'btn-sm' ,'me-3', 'fw-bold', 'mb-2']
  }

  constructor(
    private connectionDBService:ConnectionDBService
    ) { }

  ngOnInit(): void {
  }

  //Método que se ejecuta al dar click en Comentar
  sendAnswer(): void{
    var comment = this.answerBoxModel?.getComment();
    comment = comment? comment:'';
    if(this.answerBoxModel?.isFormValid() && this.user && this.pregunta){
      const respuesta: RespuestaModel = {
        "contenido": comment,
        "ranking": 0,
        "id_pregunta": this.pregunta?.id_pregunta,
        "id_usuario": this.user?.id_usuario,
        "usuario": this.user
      }
      this.pregunta?.observableShared?.emit(respuesta);
      this.answerBoxModel.resetForm();
    }
  }
}
