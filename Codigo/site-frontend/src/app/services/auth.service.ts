import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

const APIUrl = 'http://localhost:3000'

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _loggedIn = false;
    private _email = '';

    constructor(
        private http: HttpClient,
        private storage: Storage) 
        { 
            this.storage.create();
        }

    authenticate(usuario: string, senha: string) {
        this.storage.set('email', usuario);
        this._email = usuario;
        this._loggedIn = true;
        return this.http.post(APIUrl + '/usuario/login', { usuario, senha });
    }

    logout() {
        this.storage.remove('email');
        this._email = '';
        this._loggedIn = false;
      }
    
      get loggedIn() {
        return this._loggedIn;
      }
    
      get email() {
        return this._email;
      }
    
}