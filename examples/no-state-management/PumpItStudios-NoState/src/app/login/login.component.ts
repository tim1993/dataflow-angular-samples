import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'projects/base-components/src/lib/models/user.model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({});
  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.redirectIfLoggedIn(this.authService.user);
  }

  login() {
    if (this.loginForm?.invalid) {
      return;
    }

    this.authService
      .login(
        this.loginForm?.get('user')?.value,
        this.loginForm?.get('password')?.value
      )
      .subscribe(this.redirectIfLoggedIn.bind(this));
  }

  private redirectIfLoggedIn(user?: IUser) {
    if (user) {
      this.router.navigate(['/dashboard']);
    }
  }
}
