import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  //login
  login(email: string, password: string) {
    this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAxKnhK2yDH8takRD1CsCieVFnfKyixdT0',
        {
          email: email,
          password: password,
        }
      )
      .subscribe((userdata) => console.log(userdata));
  }
  //signup
  signup(email: string, password: string) {
    this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAxKnhK2yDH8takRD1CsCieVFnfKyixdT0',
        {
          email: email,
          password: password,
        }
      )
      .subscribe((userdata) => console.log(userdata));
  }
}
