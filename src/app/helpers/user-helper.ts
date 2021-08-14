import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import { User } from "../models/user";
import { TokenHelper } from "./token-helper";

@Injectable({
    providedIn: 'root'
})
export class UserHelper {

    constructor(private _tokenHelper: TokenHelper) {

    }

    getCurrentUser(): User {

        let token = this._tokenHelper.getAuthorizationToken();

        if(token  != null) {

            let currentUser: User = jwt_decode(token);

            return currentUser
        }

        return new User();
    }

}