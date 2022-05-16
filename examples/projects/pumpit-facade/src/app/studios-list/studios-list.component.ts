import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Studio } from 'projects/base-components/src/lib/models/studio.model';
import { changeDectionStrategy } from '../app.config';
import { ApplicationFacade } from '../facades/application.facade';
import { StudioFacade } from '../facades/studio.facade';

@Component({
  selector: 'app-studios-list',
  templateUrl: './studios-list.component.html',
  styleUrls: ['./studios-list.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class StudiosListComponent implements OnInit {
  constructor(public studio: StudioFacade, public application: ApplicationFacade, private router: Router) {}

  ngOnInit(): void {
    this.studio.getStudios();
    this.application.getUser();
  }

  scheduleVisit(studio: Studio) {
    this.router.navigate(['/schedule', studio.id]);
  }

  upgrade() {
    this.application.upgradeToPremium();
  }
}
