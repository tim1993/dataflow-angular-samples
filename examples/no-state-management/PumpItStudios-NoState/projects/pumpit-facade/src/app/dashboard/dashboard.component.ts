import { Component, OnInit } from '@angular/core';
import { changeDectionStrategy } from '../app.config';
import { DashboardFacade } from '../facades/dashboard.facade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class DashboardComponent implements OnInit {
  constructor(public dashboard: DashboardFacade) {}

  ngOnInit(): void {
    this.dashboard.getDashboardData();
  }
}
