import { Studio } from './studio.model';

export interface Appointment {
  date: string;
  time: string;
  studio: Studio;
}
