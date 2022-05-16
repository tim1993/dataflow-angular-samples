import { Selector } from '@ngxs/store';
import { AppointmentState } from './appointment.state';
import { IAppointmentStateModel } from './appointment.state.model';

export class AppointmentSelectors {
  @Selector([AppointmentState])
  public static getAppointments(state: IAppointmentStateModel) {
    return state.appointments;
  }
}
