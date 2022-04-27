import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'projects/base-components/src/lib/appointment.service';
import { Studio } from 'projects/base-components/src/lib/models/studio.model';
import { StudioService } from 'projects/base-components/src/lib/studio.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss'],
})
export class AddAppointmentComponent implements OnInit {
  public studio?: Studio;
  public timeCtrl = new FormControl('8:00');
  public dateCtrl = new FormControl('Tomorrow');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointment: AppointmentService,
    private studios: StudioService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const studioId = +params['studio'];
      this.studios.details(studioId).subscribe((s) => (this.studio = s));
    });
  }

  createAppointment() {
    if (this.studio) {
      this.appointment
        .addAppointment({
          studio: this.studio,
          date: this.dateCtrl.value,
          time: this.timeCtrl.value,
        })
        .subscribe(() => {
          this.router.navigate(['/appointments']);
        });
    }
  }
}
