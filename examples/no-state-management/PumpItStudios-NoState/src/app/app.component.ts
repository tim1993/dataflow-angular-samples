import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'projects/base-components/src/lib/appointment.service';
import { changeDectionStrategy } from './app.config';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class AppComponent implements OnInit {
  title = 'PumpItStudios-NoState';
  appointmentCount?: number;
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe((appointments) => {
      this.appointmentCount =
        appointments.length > 0 ? appointments.length : undefined;
    });
  }
}
