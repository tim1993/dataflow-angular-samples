import { Studio } from "projects/base-components/src/lib/models/studio.model";

export class GetAppointments {
  public static readonly type = '[Appointment] GetAppointments';

  constructor() {}
}

export class CreateAppointment {
  public static readonly type = '[Appointment] CreateAppointment';

  constructor(
    public studio: Studio,
    public date: string,
    public time: string
  ) {}
}
