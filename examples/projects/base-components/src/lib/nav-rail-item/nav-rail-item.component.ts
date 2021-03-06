import { Component, Input, OnInit } from '@angular/core';
import { changeDectionStrategy } from 'src/app/app.config';

@Component({
  selector: 'pumpit-nav-rail-item',
  templateUrl: './nav-rail-item.component.html',
  styleUrls: ['./nav-rail-item.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class NavRailItemComponent implements OnInit {
  @Input() public iconClass?: string;
  @Input() public hover = true;
  @Input() public count?: number;
  constructor() {}

  ngOnInit(): void {}
}
