import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Appointment } from 'projects/base-components/src/lib/models/appointment.model';
import { Observable } from 'rxjs';
import { changeDectionStrategy } from '../app.config';
import { GetAppointments } from './state/appointment.actions';
import { AppointmentSelectors } from './state/appointment.selectors';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class AppointmentListComponent implements OnInit {
  @Select(AppointmentSelectors.getAppointments)
  public appointments$!: Observable<Appointment[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetAppointments());
  }
}
