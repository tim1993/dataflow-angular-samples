import { Injectable } from '@angular/core';
import { IUser } from 'projects/base-components/src/lib/models/user.model';
import { UserService } from 'projects/base-components/src/lib/user.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationFacade {
  private userSubject = new BehaviorSubject<IUser | null>(null);

  public user$ = this.userSubject.asObservable();

  constructor(private userService: UserService) {}

  public login(user: string, password: string) {
    this.userService
      .authenticate(user, password)
      .subscribe(this.userSubject.next);
  }
}
