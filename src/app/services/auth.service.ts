import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl + "/users/login";

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<any> {
    return this.http.post(this.baseUrl, login);
  }

}
