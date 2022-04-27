import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AccountStatus,
  IUser,
} from 'projects/base-components/src/lib/models/user.model';
import { StudioService } from 'projects/base-components/src/lib/studio.service';
import { Studio } from '../../../projects/base-components/src/lib/models/studio.model';
import { changeDectionStrategy } from '../app.config';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-studios-list',
  templateUrl: './studios-list.component.html',
  styleUrls: ['./studios-list.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class StudiosListComponent implements OnInit {
  studios: Studio[] = [];
  AccountStatus = AccountStatus;
  user?: IUser;
  get hasPremium() {
    return this.user?.status != AccountStatus.Free;
  }
  constructor(
    public authService: AuthenticationService,
    private studioService: StudioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studioService.get().subscribe((s) => (this.studios = s));
    this.authService.getUser().subscribe((u) => (this.user = u));
  }

  scheduleVisit(studio: Studio) {
    this.router.navigate(['/schedule', studio.id]);
  }

  upgrade() {
    this.authService.updateToPremium().subscribe(() => {});
  }
}
