import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionGuard } from '@core/guards/session/session.guard';
import { UsuarioModel } from '@core/models/api/usuarios.model';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css']
})
export class HelpPageComponent implements OnInit {
  @ViewChild('answerBox') private answerBoxComponent:any;
  user?:UsuarioModel;
  buttonSend = {
    "title" : 'Enviar Comentario',
    "class" : ['btn', 'btn-primary']
  }

  sectionHeading = {
    "title" : 'Contactanos',
    "class" : ['h2', 'text-center', 'my-4']
  }

  sectionDescription = {
    "title" : '¿Tiene usted alguna pregunta? Por favor, no dude en contactarnos directamente. Nuestro equipo le responderá para ayudarle.',
    "class" : ['text-center', 'mb-5']
  }
  
  constructor(private sessionGuard:SessionGuard) { }

  ngOnInit(): void {
    this.user = this.sessionGuard.user;
  }

  sendComment():void{
    const comment = this.answerBoxComponent.getComment();
    if(this.answerBoxComponent.isFormValid()){
      console.log(comment);
      this.answerBoxComponent.resetForm();
    }
  }

}
