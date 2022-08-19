import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '@core/models/api/usuarios.model';
import { ConnectionDBService } from '@shared/services/connection-db.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  navBarDash = {
    "classContainer" : ['navbardashBG'],
    "class" : ['navbardash']
  }

  sectionGeneral = {
    "classContainer" : ['home-wrapper'],
    "class" : ['col-12']
  }

  aside = {
    "classContainer" : ['home-wrapper'],
    "class" : ['more']
  }

  constructor() { }

  ngOnInit(): void {
  }
}
