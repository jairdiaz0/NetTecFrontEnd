import { Injectable } from '@angular/core';
import { PreguntaModelMod } from '@core/models/api/preguntasMod.model.';

@Injectable({
  providedIn: 'root'
})
export class TmpService {
  mockPostList?:Array<PreguntaModelMod>;
  constructor() { }

  public set(){
    
  }
}
