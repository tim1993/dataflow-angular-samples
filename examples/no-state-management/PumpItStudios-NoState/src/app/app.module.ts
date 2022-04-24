import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BaseComponentsModule } from 'projects/base-components/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { StudiosListComponent } from './studios-list/studios-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ProfilePageComponent,
    StudiosListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BaseComponentsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
