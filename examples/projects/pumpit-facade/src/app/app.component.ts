import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { changeDectionStrategy } from './app.config';
import { AuthenticationService } from './authentication.service';
import { ApplicationFacade } from './facades/application.facade';
import { AppointmentFacade } from './facades/appointment.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class AppComponent implements OnInit {
  title = 'PumpItStudios-Facade';
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public appointment: AppointmentFacade,
    public application: ApplicationFacade
  ) {}

  ngOnInit(): void {
    this.appointment.getAppointments();
  }
}
