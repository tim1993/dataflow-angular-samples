import { Injectable } from '@angular/core';
import {
  AccountStatus,
  IUser,
} from 'projects/base-components/src/lib/models/user.model';
import { UserService } from 'projects/base-components/src/lib/user.service';
import { defer, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends UserService {
  private static UserStorageKey = 'user';
  public user?: IUser;

  constructor() {
    super();
    this.init();
  }

  private init(): void {
    const userJson = sessionStorage.getItem(
      AuthenticationService.UserStorageKey
    );
    if (userJson) {
      this.user = JSON.parse(userJson);
    }
  }

  public updateToPremium() {
    return defer(() => {
      if (this.user) {
        this.user.status = AccountStatus.P1;
        this.persistUser(this.user);
        return of(true);
      }

      return of(false);
    });
  }

  public getUser(): Observable<IUser> {
    return of({ ...(this.user ?? {}) } as any);
  }

  public login(user: string, password: string) {
    return this.authenticate(user, password).pipe(
      tap(this.persistUser.bind(this))
    );
  }

  private persistUser(user: IUser) {
    this.user = user;
    sessionStorage.setItem(
      AuthenticationService.UserStorageKey,
      JSON.stringify(user)
    );
  }
}
