import { Appointment } from "projects/base-components/src/lib/models/appointment.model";

export interface IAppointmentStateModel {
  appointments: Appointment[];
}

export const appointmentStateModelDefault: IAppointmentStateModel = {
  appointments: [],
};
