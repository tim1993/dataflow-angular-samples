import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { users } from './data/user.data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private pass = 'it';
  private authenticated = false;
  constructor() {}

  authenticate(user: string, password: string) {
    const usr = users.find((u) => u.username === user);
    if (usr && password == this.pass) {
      this.authenticated = true;
      return of(usr);
    }

    return throwError(() => 'User not found or password wrong.');
  }

  get() {
    if (this.authenticated) {
      return of(users);
    }

    return throwError(() => 'You are not permitted to load the users.');
  }
}
