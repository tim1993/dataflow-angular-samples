import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pumpit-nav-rail-item',
  templateUrl: './nav-rail-item.component.html',
  styleUrls: ['./nav-rail-item.component.scss'],
})
export class NavRailItemComponent implements OnInit {
  @Input() public iconClass?: string;
  @Input() public hover = true;
  constructor() {}

  ngOnInit(): void {}
}
