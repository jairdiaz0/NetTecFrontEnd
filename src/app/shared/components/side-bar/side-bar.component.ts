import { Component, OnInit } from '@angular/core';
import { SessionGuard } from '@core/guards/session/session.guard';
import { UsuarioModel } from '@core/models/api/usuarios.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  user?:UsuarioModel;
  userNotFound = 'Usuario No Encontrado';
  mainMenu: {
    defaultOptions: Array<any>, defaultmenu: Array<any>
  } = { defaultOptions: [], defaultmenu: []}
  constructor(private sessionGuard:SessionGuard) { }

  ngOnInit(): void {
    this.user = this.sessionGuard.user;
    this.mainMenu.defaultOptions = [
      {
        name: 'Inicio',
        router: ['/', 'home', 'publications']
      },
      {
        name: 'Categorias',
        router: ['/', 'home', 'categories']
      },
      {
        name: 'Ayuda',
        router: ['/', 'home', 'contactUs']
      },
      {
        name: 'Salir',
        router: ['/', 'auth']
      }
    ]
    this.mainMenu.defaultmenu = [
      {
        itemMenu: "Inicio",
        router: ['/']
      },
      {
        itemMenu: "Acerca De:",
        router: ['/','NetTec', 'about']
      },
      {
        itemMenu: "Ayuda",
        router: ['/', 'NetTec', 'help']
      }
    ]
  }

  getUserName():String{
    if(this.user?.persona){
      return this.user?.persona?.nombre;
    }else{
      return this.userNotFound;
    }
  }
}
