import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'projects/base-components/src/lib/appointment.service';
import { Appointment } from 'projects/base-components/src/lib/models/appointment.model';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
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
