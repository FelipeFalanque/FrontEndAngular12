import jwt_decode from "jwt-decode";

export class TokenHelper {

    isUserLoggedIn() {
        const token = this.getAuthorizationToken();
        if (!token) {
            return false;
        } else if (this.isTokenExpired(token)) {
            return false;
        }

        return true;
    }

    getAuthorizationToken() {
        const token = window.localStorage.getItem('token');
        return token;
    }

    getTokenExpirationDate(token: string): Date {

        const decoded: any = jwt_decode(token);

        if (decoded.exp === undefined) {
            return new Date(0);
        }

        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }

    isTokenExpired(token?: string): boolean {
        if (!token) {
            return true;
        }

        const date = this.getTokenExpirationDate(token);
        if (date === undefined) {
            return false;
        }

        return !(date.valueOf() > new Date().valueOf());
    }

    setToken(token: string): void {
        window.localStorage.setItem('token', token);
    }
}