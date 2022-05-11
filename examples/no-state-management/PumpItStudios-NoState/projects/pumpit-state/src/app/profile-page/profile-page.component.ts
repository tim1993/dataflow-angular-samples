import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountStatus } from 'projects/base-components/src/lib/models/user.model';
import { changeDectionStrategy } from '../app.config';
import { ApplicationFacade } from '../facades/application.facade';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class ProfilePageComponent implements OnInit {
  public AccountStatus = AccountStatus;

  constructor(
    public application: ApplicationFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.application.getUser();
  }

  logout() {
    this.application.logout();
    this.router.navigate(['/']);
  }
}
