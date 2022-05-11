import { Component, OnInit } from '@angular/core';
import { changeDectionStrategy } from '../app.config';
import { AppointmentFacade } from '../facades/appointment.facade';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class AppointmentListComponent implements OnInit {
  constructor(public appointment: AppointmentFacade) {}

  ngOnInit(): void {
    this.appointment.getAppointments();
  }
}
