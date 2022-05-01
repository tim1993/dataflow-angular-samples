import { Injectable } from '@angular/core';
import { Observable, of, switchMap, timer } from 'rxjs';
import { Appointment } from './models/appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private appointments: Appointment[] = [];
  constructor() {}

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);

    return timer(1).pipe(switchMap(() => of(appointment)));
  }

  getAppointments(): Observable<Appointment[]> {
    return timer(1).pipe(switchMap(() => of(this.appointments)));
  }
}
