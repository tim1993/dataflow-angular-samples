import { Injectable } from '@angular/core';
import { AppointmentService } from 'projects/base-components/src/lib/appointment.service';
import { Appointment } from 'projects/base-components/src/lib/models/appointment.model';
import { Studio } from 'projects/base-components/src/lib/models/studio.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentFacade {
  private appointmentSubject = new BehaviorSubject<Appointment[] | null>(null);

  public appointments$ = this.appointmentSubject.asObservable();

  constructor(private appointmentService: AppointmentService) {}

  public getAppointments() {
    this.appointmentService.getAppointments().subscribe((a) => (this.appointmentSubject.next(a)));
  }

  public createAppointment(studio: Studio, date: string, time: string): Observable<Appointment> {
    if (studio) {
      return this.appointmentService.addAppointment({
          studio: studio,
          date: date,
          time: time,
        });
    }

    return of();
  }
}
