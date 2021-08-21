import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './authorization/sign-in/sign-in.component';
import { SignUpComponent } from './authorization/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms'

import { NgxMaskModule } from 'ngx-mask';
import { HomeComponent } from './views/home/home.component';

import { httpInterceptorProviders } from './interceptors/index';
import { TokenHelper } from './helpers/token-helper';
import { UserHelper } from './helpers/user-helper';
import { NavbarComponent } from './views/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders,
    TokenHelper,
    UserHelper
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
