import { Component, OnInit } from '@angular/core';

/*Importaciones datos de un json*/
import * as dataRaw from '@data/users.json';

/*Importaciones*/
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

/*@CoAuthor John Perez*/

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})

export class LogInPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  page = {
    "title" : 'NetTec',
    "class" : ['mt-1', 'mb-4', 'pb-1', 'h4']
  }
  form = {
    "title" : 'Iniciar Sesión',
    "title_class" : ['mb-3', 'ms-2', 'titulo'],
    "label_email" : 'Correo Electronico',
    "label_email_class" : ['texto'],
    "input_email_class" : ['form-control', 'texto'],
    "input_email_max_length" : 320,
    "label_password" : 'Contraseña',
    "label_password_class" : ['texto'],
    "input_password_class" : ['form-control', 'texto'],
    "input_password_max_length" : 254,
    "input_password_type_flag" : false
  }
  alert = {
    "title_default" : 'Usuario o Clave incorrectos',
    "title_err" : 'No hay comunicación con el servidor',
    "title_wait" : 'Esperando respuesta del servidor',
    "title": '',
    "class" : ['alert', 'alert-danger', 'col-auto'],
    "flag" : false
  }
  button = {
    "title" : 'Iniciar Sesión',
    "class" : ['btn', 'btn-danger', 'mb-3']
  }
  forgotPassword = {
    "title" : '¿Olvidaste tu contraseña?',
    "class" : ['text-muted', 'd-block', 'cursor']
  }
  signIn = {
    "title" : '¿No tienes una cuenta?',
    "class" : ['mb-2'],
    "btn_title" : 'Registrarse',
    "btn_class" : ['btn', 'btn-outline-danger'],
    "btn_router" : ['/', 'auth', 'signIn']
  }

  constructor(
    private router:Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this._authService.checkSession();
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required, 
          Validators.email,
          Validators.maxLength(this.form.input_email_max_length)
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(this.form.input_password_max_length)
        ])
      }
    );
  }

  /**Función que envia los datos para ingresar */
  async sendLogin(){
    if(this.formLogin.valid){
      this.alert.flag = true;
      this.alert.title = this.alert.title_wait;
      const { email, password } = this.formLogin.value;
      try {
        const { token } = await this._authService.validLogin(email, password);
        if(token){
          this.router.navigate(['/', 'home']);
        }else{
          this.alert.title = this.alert.title_default;
        }
      } catch (error) {
        this.alert.title = this.alert.title_err;
      } 
    }
  }

  /**Función que nos permite cambiar el tipo del input */
  changeTypePassword(){
    this.form.input_password_type_flag = !this.form.input_password_type_flag;
  }
}
