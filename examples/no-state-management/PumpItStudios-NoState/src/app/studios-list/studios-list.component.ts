import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudioService } from 'projects/base-components/src/lib/studio.service';
import { Studio } from '../../../projects/base-components/src/lib/models/studio.model';
import { changeDectionStrategy } from '../app.config';

@Component({
  selector: 'app-studios-list',
  templateUrl: './studios-list.component.html',
  styleUrls: ['./studios-list.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class StudiosListComponent implements OnInit {
  studios: Studio[] = [];
  constructor(private studioService: StudioService, private router: Router) {}

  ngOnInit(): void {
    this.studioService.get().subscribe((s) => (this.studios = s));
  }

  scheduleVisit(studio: Studio) {
    this.router.navigate(['/schedule', studio.id]);
  }
}
