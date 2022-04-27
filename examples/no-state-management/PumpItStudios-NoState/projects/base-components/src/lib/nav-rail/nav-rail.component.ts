import { Component, OnInit } from '@angular/core';
import { changeDectionStrategy } from 'src/app/app.config';

@Component({
  selector: 'pumpit-nav-rail',
  templateUrl: './nav-rail.component.html',
  styleUrls: ['./nav-rail.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class NavRailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
