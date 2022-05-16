import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxEchartsModule } from 'ngx-echarts';
import { BaseComponentsModule } from 'projects/base-components/src/public-api';
import { environment } from '../environments/environment';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentState } from './appointment-list/state/appointment.state';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardState } from './dashboard/state/dashboard.state';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AppState } from './state/app.state';
import { StudioState } from './studios-list/state/studio.state';
import { StudiosListComponent } from './studios-list/studios-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ProfilePageComponent,
    StudiosListComponent,
    AddAppointmentComponent,
    AppointmentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BaseComponentsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    NgxsModule.forRoot([AppState, DashboardState, AppointmentState, StudioState], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot({
      key: [AppState, AppointmentState],
    }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
