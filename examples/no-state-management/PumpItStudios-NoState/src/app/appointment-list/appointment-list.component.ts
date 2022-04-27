import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'projects/base-components/src/lib/appointment.service';
import { Appointment } from 'projects/base-components/src/lib/models/appointment.model';
import { changeDectionStrategy } from '../app.config';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class AppointmentListComponent implements OnInit {
  public appointments: Appointment[] = [];
  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService
      .getAppointments()
      .subscribe((a) => (this.appointments = a));
  }
}
