import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'projects/base-components/src/lib/appointment.service';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PumpItStudios-State';
  appointmentCount?: number;
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe((appointments) => {
      this.appointmentCount = appointments.length;
    });
  }
}
