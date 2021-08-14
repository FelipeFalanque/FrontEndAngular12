import { Login } from './../../models/login';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Toast } from 'bootstrap';
import { TokenHelper } from 'src/app/helpers/token-helper';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInFrom = new FormGroup({
    email: new FormControl(''),
    cell: new FormControl(''),
    password: new FormControl('')
  });

  year = new Date().getFullYear();
  mensagem = "Informe Email e Senha";
  optionChecked = "email";

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _tokenHelper: TokenHelper) { }

  ngOnInit(): void {
  }

  onItemChange(input: any): void {
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

    let login: Login = {
      email: this.signInFrom.value.email,
      cell: this.signInFrom.value.cell,
      password: this.signInFrom.value.password
    }


    console.log("signInFrom : " + this.signInFrom);
    console.log("login : " + login);

    this._authService.login(login).subscribe(
      (resp) => {
        this._tokenHelper.setToken(resp.token);
      },
      (error) => {
        console.log(error);

        let toastElement = document.getElementById('toast-error');
        if (toastElement != null) {
          let toast = new Toast(toastElement);
          toast.show();
        }

      }
    );

  }

  onSignUp() {
    console.log('QUERO ME CADASTRAR');
  }
}
