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
  public studio?: Studio;
  public timeCtrl = new FormControl('8:00');
  public dateCtrl = new FormControl('Tomorrow');

  constructor(
    private route: ActivatedRoute,
    private appointment: AppointmentFacade,
    private studioFacade: StudioFacade,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const studioId = +params['studio'];
      this.studioFacade.getDetails(studioId).subscribe((studio) => {
        this.studio = studio;
      });
    });
  }

  createAppointment() {
    if (this.studio) {
      this.appointment
        .createAppointment(this.studio, this.dateCtrl.value, this.timeCtrl.value)
        .subscribe(() => {
          this.router.navigate(['/appointments']);
        });
    }
  }
}
