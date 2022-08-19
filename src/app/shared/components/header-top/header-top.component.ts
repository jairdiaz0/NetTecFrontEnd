import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {
  mainMenu: {
    title: String, defaultOptions: Array<any>, defaultmenu: Array<any>, defaultSearch: String
  } = { defaultOptions: [], defaultmenu: [], defaultSearch:"", title:"NetTec"}
  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Mi cuenta',
        class: ['dropdown-item', 'rounded'],
        router: ['/', 'account']
      },
      {
        name: 'Configuración',
        class: ['dropdown-item', 'rounded'],
        router: ['/', 'account', 'configuration']
      },
      {
        name: 'Cerrar Sesión',
        class: ['dropdown-item', 'rounded'],
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
    this.mainMenu.defaultSearch = "Buscar";
  }
}
