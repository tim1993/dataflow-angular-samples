import { Component, OnInit } from '@angular/core';
import { StudioService } from 'projects/base-components/src/lib/studio.service';
import { Studio } from '../../../projects/base-components/src/lib/models/studio.model';

@Component({
  selector: 'app-studios-list',
  templateUrl: './studios-list.component.html',
  styleUrls: ['./studios-list.component.scss'],
})
export class StudiosListComponent implements OnInit {
  studios: Studio[] = [];
  constructor(private studioService: StudioService) {}

  ngOnInit(): void {
    this.studioService.get().subscribe((s) => this.studios = s);
  }
}
