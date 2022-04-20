import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [NavbarComponent, ProfileComponent],
  imports: [RouterModule, CommonModule],
  exports: [NavbarComponent],
})
export class BaseComponentsModule {}
