import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AlertModel } from '@core/models/more/alerts.model';
import { UsuarioModel } from '@core/models/api/usuarios.model';
import { ConnectionDBService } from '@shared/services/connection-db.service';

@Component({
  selector: 'app-anser-box-model',
  templateUrl: './answer-box-model.component.html',
  styleUrls: ['./answer-box-model.component.css']
})
export class AnserBoxModelComponent implements OnInit {
  @Input() user?: UsuarioModel;
  userNotFound = 'Usuario No Encontrado';
  formAnswer: FormGroup = new FormGroup({});
  showAlert = false;
  alert: AlertModel = {
    "flag": false,
    "title_true": 'Comentario Enviado con Éxito',
    "title_false": 'Favor de verificar el comentario',
    "class_true": ['alert', 'alert-success'],
    "class_false": ['alert', 'alert-danger']
  }
  cardHeader = {
    "title" : 'NaN',
    "class" : ['card-header'],
    "classSmall" : ['fw-bold']
  }
  cardBody = {
    "title" : 'Comentario:',
    "classSmall" : ['fw-bold']
  }
  constructor(private connectionDBService:ConnectionDBService) {
  }

  ngOnInit(): void {
    this.formAnswer = new FormGroup(
      {
        comment: new FormControl('',[
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(254)
        ])
      });
  }
  /**Función que nos devuelve el nombre del usuario que esta logueado */
  getUserName(){
    const persona = this.user?.persona;
    if(persona){
      return persona.nombre + ' ' + persona.apellido_paterno + ' ' + persona.apellido_materno;
    }
    return this.userNotFound;
  }

  /**Método que nos indica si el Form es válido */
  isFormValid(): boolean{
    const bandera = this.formAnswer.valid;
    return bandera;
  }

  /**Método que nos permite limpiar los componentes del Form */
  resetForm(): void{
    this.formAnswer.reset();
  }

  /**Método que nos permite obtener el comentario del AnswerBox */
  getComment(): String{
    this.showAlert = true;
    this.alert.flag = this.isFormValid();
    const {comment} = this.formAnswer.value;
    return comment;
  }
}
