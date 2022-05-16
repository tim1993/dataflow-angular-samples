import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Studio } from 'projects/base-components/src/lib/models/studio.model';
import { IUser } from 'projects/base-components/src/lib/models/user.model';
import { Observable } from 'rxjs';
import { changeDectionStrategy } from '../app.config';
import { UpgradeToPremium } from '../state/app.actions';
import { AppSelectors } from '../state/app.selectors';
import { GetStudios } from './state/studio.actions';
import { StudioSelectors } from './state/studio.selectors';

@Component({
  selector: 'app-studios-list',
  templateUrl: './studios-list.component.html',
  styleUrls: ['./studios-list.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class StudiosListComponent implements OnInit {
  @Select(AppSelectors.hasPremium)
  public hasPremium$!: Observable<boolean>;

  @Select(StudioSelectors.getStudios)
  public studios$!: Observable<Studio[]>;

  @Select(AppSelectors.getUser)
  public user$!: Observable<IUser>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(new GetStudios());
  }

  scheduleVisit(studio: Studio) {
    this.router.navigate(['/schedule', studio.id]);
  }

  upgrade() {
    this.store.dispatch(new UpgradeToPremium());
  }
}
