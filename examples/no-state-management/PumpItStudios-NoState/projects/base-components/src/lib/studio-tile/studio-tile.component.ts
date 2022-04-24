import { Component, Input, OnInit } from '@angular/core';
import { Studio } from '../models/studio.model';
@Component({
  selector: 'pumpit-studio-tile',
  templateUrl: './studio-tile.component.html',
  styleUrls: ['./studio-tile.component.scss']
})
export class StudioTileComponent implements OnInit {
  @Input() studio?: Studio;

  constructor() { }

  ngOnInit(): void {
  }

}
