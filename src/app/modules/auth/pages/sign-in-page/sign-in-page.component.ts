import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  formSignIn: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.formSignIn = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email,
          Validators.maxLength(50)
        ]),
        controlNumber: new FormControl('',[
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8)
        ])
      }
    );
  }

}
