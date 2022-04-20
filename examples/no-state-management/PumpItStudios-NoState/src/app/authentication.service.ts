import { Injectable } from '@angular/core';
import { IUser } from 'projects/base-components/src/lib/models/user.model';
import { UserService } from 'projects/base-components/src/lib/user.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends UserService {
  public user?: IUser;

  constructor() {
    super();
  }

  public login(user: string, password: string) {
    return this.authenticate(user, password).pipe(tap((u) => (this.user = u)));
  }
}
