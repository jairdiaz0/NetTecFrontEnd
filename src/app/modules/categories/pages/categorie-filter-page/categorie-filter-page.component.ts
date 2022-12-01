import { Component, OnInit } from '@angular/core';
import { SessionGuard } from '@core/guards/session/session.guard';
import { PreguntaModelMod } from '@core/models/api/preguntasMod.model.';
import { UsuarioModel } from '@core/models/api/usuarios.model';
import { TmpService } from '@modules/categories/services/tmp.service';

@Component({
  selector: 'app-categorie-filter-page',
  templateUrl: './categorie-filter-page.component.html',
  styleUrls: ['./categorie-filter-page.component.css']
})
export class CategorieFilterPageComponent implements OnInit {

  mockPostList?:Array<PreguntaModelMod>;
  user?: UsuarioModel;

  constructor(private tmp:TmpService, private sessionGuard:SessionGuard) { }

  ngOnInit(): void {
    this.setUser();
    this.setMockPostListFilter();
  }

  /**Obtenemos el usuario de acuerdo al token que se puso al iniciar sesión */
  private setUser(){
    this.user = this.sessionGuard.user;
  }

  private setMockPostListFilter(){
    this.mockPostList = this.tmp.mockPostList;
  }
}
