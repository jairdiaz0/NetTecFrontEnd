/*Importaciones datos de un json*/
//import * as dataRaw from '@data/preguntas.json';

/*Importaciones*/
import { Component, OnInit } from '@angular/core';
import { ConnectionDBService } from '@shared/services/connection-db.service';
import { PreguntaModelMod } from '@core/models/api/preguntasMod.model.';
import { UsuarioModel } from '@core/models/api/usuarios.model';
import { SessionGuard } from '@core/guards/session/session.guard';

@Component({
  selector: 'app-publications-page',
  templateUrl: './publications-page.component.html',
  styleUrls: ['./publications-page.component.css']
})
export class PublicationsPageComponent implements OnInit {
  mockPostList?:Array<PreguntaModelMod>;
  user?: UsuarioModel;

  constructor(
    private _connectionDBService$: ConnectionDBService,
    private sessionGuard:SessionGuard
    ) { }

  ngOnInit(): void {
    this.setQuestions();
    this.setUser();
  }

  /**Obtenemos el usuario de acuerdo al token que se puso al iniciar sesión */
  private setUser(){
    this.user = this.sessionGuard.user;
  }

  /**Obtenemos las preguntas y las asignamos al Array*/
  private async setQuestions(){
    this.mockPostList = await this._connectionDBService$.getPreguntas();
  }

}
