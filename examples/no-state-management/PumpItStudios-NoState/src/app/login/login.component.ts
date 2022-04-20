import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      .subscribe((user) => {
        if (user) {
          this.router.navigate(['/dashboard']);
        }
      });
  }
}
