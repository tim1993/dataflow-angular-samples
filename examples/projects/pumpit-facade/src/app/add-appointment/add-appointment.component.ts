import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Studio } from 'projects/base-components/src/lib/models/studio.model';
import { changeDectionStrategy } from '../app.config';
import { AppointmentFacade } from '../facades/appointment.facade';
import { StudioFacade } from '../facades/studio.facade';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class AddAppointmentComponent implements OnInit {
  public timeCtrl = new FormControl('8:00');
  public dateCtrl = new FormControl('Tomorrow');

  constructor(
    public studioFacade: StudioFacade,
    private route: ActivatedRoute,
    private appointment: AppointmentFacade,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const studioId = +params['studio'];
      this.studioFacade.getStudioDetails(studioId);
    });
  }

  createAppointment(studio: Studio) {
    if (studio) {
      this.appointment
        .createAppointment(studio, this.dateCtrl.value, this.timeCtrl.value)
        .subscribe(() => {
          this.router.navigate(['/appointments']);
        });
    }
  }
}
