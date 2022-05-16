import { Injectable } from "@angular/core";
import { attachAction } from "@ngxs-labs/attach-action";
import { State } from "@ngxs/store";
import { AppointmentService } from "projects/base-components/src/lib/appointment.service";
import { CreateAppointment, GetAppointments } from "./appointment.actions";
import { createAppointment, getAppointments } from "./appointment.handlers";
import { appointmentStateModelDefault, IAppointmentStateModel } from "./appointment.state.model";

@State<IAppointmentStateModel>({
  name: 'Appointment',
  defaults: appointmentStateModelDefault,
})
@Injectable()
export class AppointmentState {
  constructor(appointmentService: AppointmentService) {
    attachAction(AppointmentState, GetAppointments, getAppointments(appointmentService));
    attachAction(AppointmentState, CreateAppointment, createAppointment(appointmentService));
  }
}
