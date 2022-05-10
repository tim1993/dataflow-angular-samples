import { Injectable } from '@angular/core';
import {
  AccountStatus,
  IUser
} from 'projects/base-components/src/lib/models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationFacade {
  private user: IUser | null = null;
  private userSubject = new BehaviorSubject<IUser | null>(null);

  public user$ = this.userSubject.asObservable();

  constructor(private authService: AuthenticationService) {}

  public get hasPremium(): boolean {
    return this.user?.status != AccountStatus.Free;
  }

  public getUser() {
    this.authService.getUser().subscribe((u) => {
      this.user = u;
      this.userSubject.next(u);
    });
  }

  public upgradeToPermium(): Observable<boolean> {
    return this.authService.updateToPremium();
  }

  public login(user: string, password: string): Observable<IUser> {
    return this.authService.login(user, password);
  }

  public logout() {
    this.authService.logout();
  }
}
