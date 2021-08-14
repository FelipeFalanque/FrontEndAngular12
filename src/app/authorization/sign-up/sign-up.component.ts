import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signInFrom = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    cell: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl('')
  });

  year = new Date().getFullYear();
  mensagem = "Informe Email e Senha";
  optionChecked = "email";


  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onItemChange(input: any): void{
    switch (input.value) {
      case "cell":
        this.mensagem = "Informe Celular e Senha";
        this.optionChecked = "cell";
        break;
      case "email":
        this.mensagem = "Informe Email e Senha";
        this.optionChecked = "email";
        break;
    }
  }

  onSubmit() {
    console.log('CESAR FELIPE FALANQUE');
    console.log(this.signInFrom);
    console.log(this.signInFrom.value.email);
    console.log(this.signInFrom.value.cell);
    console.log(this.signInFrom.value.password);
  }

  onSignUp() {
    console.log('QUERO ME CADASTRAR');
  }
}

