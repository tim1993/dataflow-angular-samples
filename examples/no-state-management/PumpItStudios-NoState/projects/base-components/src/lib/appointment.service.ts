import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from './models/appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private appointments: Appointment[] = [];
  constructor() {}

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
    return of(appointment);
  }

  getAppointments(): Observable<Appointment[]> {
    return of(this.appointments);
  }
}
