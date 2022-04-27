import { Component, OnInit } from '@angular/core';
import { changeDectionStrategy } from '../app.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
