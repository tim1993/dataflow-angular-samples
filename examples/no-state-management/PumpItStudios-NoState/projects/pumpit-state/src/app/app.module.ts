import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { BaseComponentsModule } from 'projects/base-components/src/public-api';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
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
    }),],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
