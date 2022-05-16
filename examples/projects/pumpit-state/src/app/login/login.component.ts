import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { IUser } from 'projects/base-components/src/lib/models/user.model';
import { Observable } from 'rxjs';
import { changeDectionStrategy } from '../app.config';
import { Login } from '../state/app.actions';
import { AppSelectors } from '../state/app.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class LoginComponent implements OnInit {
  @Select(AppSelectors.getUser)
  public user$!: Observable<IUser>;

  loginForm: FormGroup = this.fb.group({});
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.user$.subscribe((user) => {
      this.redirectIfLoggedIn(user);
    });
  }

  login() {
    if (this.loginForm?.invalid) {
      return;
    }

    this.store
      .dispatch(
        new Login(
          this.loginForm?.get('user')?.value,
          this.loginForm?.get('password')?.value
        )
      )
      .subscribe(this.redirectIfLoggedIn.bind(this));
  }

  private redirectIfLoggedIn(user?: IUser | null) {
    if (user) {
      this.router.navigate(['/dashboard']);
    }
  }
}
