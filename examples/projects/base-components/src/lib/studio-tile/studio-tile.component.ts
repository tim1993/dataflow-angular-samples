import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { changeDectionStrategy } from 'src/app/app.config';
import { Studio } from '../models/studio.model';
@Component({
  selector: 'pumpit-studio-tile',
  templateUrl: './studio-tile.component.html',
  styleUrls: ['./studio-tile.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class StudioTileComponent implements OnInit {
  @Input() studio?: Studio;
  @Input() hasPremium = false;
  @Input() allowSchedule = true;
  @Output() scheduleEvent = new EventEmitter<Studio>(true);
  public get needsPremium() {
    return !this.hasPremium && this.studio?.premiumOnly;
  }
  constructor() {}

  ngOnInit(): void {}

  handleScheduleEvent() {
    if (!this.needsPremium) {
      this.scheduleEvent.emit(this.studio);
    }
  }
}
