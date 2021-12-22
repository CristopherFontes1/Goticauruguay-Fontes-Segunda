import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  emailField: FormControl;

  constructor() { 
    this.emailField = new FormControl
    ('',[
    Validators.required, 
    Validators.minLength(4),
    Validators.maxLength(20)
    
    ]);
  
  // Escuchar los cambios para aplicar las validaciones.
  // this.emailField.valueChanges
  //.subscribe(value => {
  // console.log(value);
  //})
  }

  ngOnInit(): void {
  }

  sendMail () {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }

}
