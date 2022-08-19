import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// Importamos Modelos A usar
import { CategoriaModel } from '@core/models/api/categorias.model';
import { PreguntaModelMod } from '@core/models/api/preguntasMod.model.';
import { RespuestaModel } from '@core/models/api/respuestas.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionDBService {
  private readonly URL = environment.url;
  constructor(
    private _httpClient: HttpClient,
    private cookie: CookieService
    ) { }

  private getAnswers(id_pregunta:number):Observable<Array<RespuestaModel>>{
    return this._httpClient.post<Array<RespuestaModel>>(`${this.URL}/respuestas/getAnswers`, {id_pregunta});
  }

  /**Nos devuelve un Array de Respuestas */
  getRespuestas(id_pregunta:number){
    return this.getAnswers(id_pregunta).toPromise();
  }

  private getQuestions():Observable<Array<PreguntaModelMod>>{
    return this._httpClient.get<Array<PreguntaModelMod>>(`${this.URL}/preguntas/allQuestions`);
  }

  /**Nos devuelve un Array de Preguntas / POSTS */
  getPreguntas(){
    return this.getQuestions().toPromise();
  }

  private getCategories():Observable<Array<CategoriaModel>>{
    return this._httpClient.get<Array<CategoriaModel>>(`${this.URL}/categorias/allCategories`);
  }
  
  /**Nos devuelve un Array de Categorias */
  getCategorias(){
    return this.getCategories().toPromise();
  }
}
