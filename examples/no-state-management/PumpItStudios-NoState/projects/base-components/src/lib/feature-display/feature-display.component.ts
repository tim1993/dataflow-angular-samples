import { Component, Input, OnInit } from '@angular/core';
import { StudioFeatureDeclaration, StudioFeature } from '../models/studio.model';

@Component({
  selector: 'pumpit-feature-display',
  templateUrl: './feature-display.component.html',
  styleUrls: ['./feature-display.component.scss']
})
export class FeatureDisplayComponent implements OnInit {
  @Input() feature?: StudioFeatureDeclaration;
  @Input() hasPremium = false;
  public StudioFeature = StudioFeature;
  constructor() { }

  ngOnInit(): void {
  }

}
