import { StateContext } from '@ngxs/store';
import { AppointmentService } from 'projects/base-components/src/lib/appointment.service';
import { tap } from 'rxjs';
import { CreateAppointment, GetAppointments } from './appointment.actions';
import { IAppointmentStateModel } from './appointment.state.model';

export const getAppointments =
  (appointmentService: AppointmentService) =>
  (
    { patchState, getState }: StateContext<IAppointmentStateModel>,
    _: GetAppointments
  ) => {
    return appointmentService.getAppointments().pipe(
      tap((appointments) => {
        patchState({
          appointments: appointments.concat(getState().appointments),
        });
      })
    );
  };

export const createAppointment =
  (appointmentService: AppointmentService) =>
  (
    { patchState, getState }: StateContext<IAppointmentStateModel>,
    action: CreateAppointment
  ) => {
    if (action.studio) {
      return appointmentService
        .addAppointment({
          studio: action.studio,
          date: action.date,
          time: action.time,
        });
    }

    return;
  };
