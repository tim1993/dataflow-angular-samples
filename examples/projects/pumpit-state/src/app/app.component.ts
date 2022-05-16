import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Appointment } from 'projects/base-components/src/lib/models/appointment.model';
import { Observable } from 'rxjs';
import { GetAppointments } from './appointment-list/state/appointment.actions';
import { AppointmentSelectors } from './appointment-list/state/appointment.selectors';
import { AuthenticationService } from './authentication.service';
import { AppSelectors } from './state/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select(AppSelectors.hasPremium)
  public hasPremium$!: Observable<boolean>;

  @Select(AppointmentSelectors.getAppointments)
  public appointments$!: Observable<Appointment[]>;

  title = 'PumpItStudios-State';
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new GetAppointments());
  }
}
