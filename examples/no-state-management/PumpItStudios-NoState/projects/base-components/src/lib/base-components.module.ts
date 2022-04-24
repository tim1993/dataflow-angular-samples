import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NavRailComponent } from './nav-rail/nav-rail.component';
import { NavRailItemComponent } from './nav-rail-item/nav-rail-item.component';
import {
  NavItemBottomDirective,
  NavItemDirective,
} from './nav-rail/nav-rail.directives';
import { DashboardChartTileComponent } from './dashboard-chart-tile/dashboard-chart-tile.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { StudioTileComponent } from './studio-tile/studio-tile.component';
import { FeatureDisplayComponent } from './feature-display/feature-display.component';

@NgModule({
  declarations: [
    ProfileComponent,
    NavRailComponent,
    NavRailItemComponent,
    NavItemDirective,
    NavItemBottomDirective,
    DashboardChartTileComponent,
    StudioTileComponent,
    FeatureDisplayComponent,
  ],
  imports: [RouterModule, CommonModule, NgxEchartsModule.forChild()],
  exports: [
    NavRailComponent,
    ProfileComponent,
    NavRailItemComponent,
    NavItemDirective,
    NavItemBottomDirective,
    DashboardChartTileComponent,
    StudioTileComponent,
  ],
})
export class BaseComponentsModule {}
