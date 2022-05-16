import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'projects/base-components/src/lib/appointment.service';
import { Appointment } from 'projects/base-components/src/lib/models/appointment.model';
import {
  AccountStatus,
  IUser,
} from 'projects/base-components/src/lib/models/user.model';
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
  private appointments?: Appointment[];
  private user?: IUser;
  get hasPremium() {
    return this.user?.status != null && this.user?.status != AccountStatus.Free;
  }
  get appointmentCount(): number {
    return this.appointments?.length ?? 0;
  }
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe((appointments) => {
      this.appointments = appointments;
    });

    this.authService.getUser().subscribe((u) => (this.user = u));
  }
}
