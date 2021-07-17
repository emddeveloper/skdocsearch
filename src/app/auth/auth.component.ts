import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLogin: boolean = true;
  constructor(private authService: AuthService) {}

  authToggle() {
    this.isLogin = !this.isLogin;
  }
  onAuthFormSubmit(authFormData: NgForm) {
    if (this.isLogin) {
      console.log('login', authFormData.value);
      this.authService.login(
        authFormData.value.email,
        authFormData.value.password
      );
    } else {
      console.log('signup', authFormData.value);
      this.authService.signup(
        authFormData.value.email,
        authFormData.value.password
      );
    }
  }
  ngOnInit(): void {}
}
