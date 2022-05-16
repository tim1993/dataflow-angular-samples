import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'projects/base-components/src/lib/models/user.model';
import { changeDectionStrategy } from '../app.config';
import { ApplicationFacade } from '../facades/application.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({});
  constructor(
    public application: ApplicationFacade,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.application.user$.subscribe((user) => {
      this.redirectIfLoggedIn(user);
    });
  }

  login() {
    if (this.loginForm?.invalid) {
      return;
    }

    this.application.login(
      this.loginForm?.get('user')?.value,
      this.loginForm?.get('password')?.value
    );
  }

  private redirectIfLoggedIn(user?: IUser | null) {
    if (user) {
      this.router.navigate(['/dashboard']);
    }
  }
}
