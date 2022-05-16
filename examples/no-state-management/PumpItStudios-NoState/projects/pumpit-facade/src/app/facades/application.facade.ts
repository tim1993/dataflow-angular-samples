import { Injectable } from '@angular/core';
import {
  AccountStatus,
  IUser,
} from 'projects/base-components/src/lib/models/user.model';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationFacade {
  private user: IUser | null = null;
  private userSubject = new BehaviorSubject<IUser | null>(null);

  public user$ = this.userSubject.asObservable();

  constructor(private authService: AuthenticationService) {}

  public hasPremium(): Observable<boolean> {
    return this.user$.pipe(map((u) => u?.status != AccountStatus.Free));
  }

  public getUser() {
    this.authService.getUser().subscribe((u) => {
      this.user = u;
      this.userSubject.next(u);
    });
  }

  public upgradeToPermium() {
    return this.authService.updateToPremium().subscribe(() => this.getUser());
  }

  public login(user: string, password: string) {
    return this.authService
      .login(user, password)
      .subscribe(() => this.getUser());
  }

  public logout() {
    this.authService.logout();
  }
}
