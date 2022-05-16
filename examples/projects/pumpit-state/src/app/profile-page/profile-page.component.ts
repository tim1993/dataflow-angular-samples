import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { AccountStatus, IUser } from 'projects/base-components/src/lib/models/user.model';
import { Observable } from 'rxjs';
import { changeDectionStrategy } from '../app.config';
import { Logout } from '../state/app.actions';
import { AppSelectors } from '../state/app.selectors';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class ProfilePageComponent implements OnInit {
  @Select(AppSelectors.getUser)
  public user$!: Observable<IUser>;

  public AccountStatus = AccountStatus;

  constructor(
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(new Logout());
    this.router.navigate(['/']);
  }
}
