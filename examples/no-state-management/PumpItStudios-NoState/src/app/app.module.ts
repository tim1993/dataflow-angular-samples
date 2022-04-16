import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BaseComponentsModule } from 'projects/base-components/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, BaseComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
