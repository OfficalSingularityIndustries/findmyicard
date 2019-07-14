import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject, fromEventPattern } from 'rxjs';
import { Storage } from '@ionic/storage';
import { User } from './user';
import { AuthResponse } from './auth-response';
import { async } from '@angular/core/testing';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER_ADDRESS: string  = 'http;//localhost:3000';

  authSubject = new BehaviorSubject(false); 

  constructor(private httpClinet: HttpClient, private storage: Storage) { }

  register(user: User): Observable<AuthResponse> {
    return this.httpClinet.post<AuthResponse>('${this.AUTH_SERVER_ADDRESS}/register', user).pipe(
    tap(async (res: AuthResponse ) => {

      if (res.user) {
        await this.storage.set("ACCESS_TOKEN", res.user.access_token);
        await this.storage.set("EXPIRES_IN", res.user.expires_in);
        this.authSubject.next(true);
      }
    })
  );
  }
  
}
