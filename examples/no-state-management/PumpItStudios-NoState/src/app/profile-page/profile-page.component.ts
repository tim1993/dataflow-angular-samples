import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'projects/base-components/src/lib/models/user.model';
import { changeDectionStrategy } from '../app.config';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class ProfilePageComponent implements OnInit {
  public user?: IUser;
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe((u) => (this.user = u));
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
