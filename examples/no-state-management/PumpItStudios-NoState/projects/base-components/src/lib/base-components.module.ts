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

@NgModule({
  declarations: [
    ProfileComponent,
    NavRailComponent,
    NavRailItemComponent,
    NavItemDirective,
    NavItemBottomDirective,
  ],
  imports: [RouterModule, CommonModule],
  exports: [
    NavRailComponent,
    ProfileComponent,
    NavRailItemComponent,
    NavItemDirective,
    NavItemBottomDirective,
  ],
})
export class BaseComponentsModule {}
