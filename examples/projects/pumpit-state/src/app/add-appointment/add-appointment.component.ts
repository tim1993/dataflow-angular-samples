import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Studio } from 'projects/base-components/src/lib/models/studio.model';
import { Observable } from 'rxjs';
import { changeDectionStrategy } from '../app.config';
import { CreateAppointment } from '../appointment-list/state/appointment.actions';
import { GetStudio } from '../studios-list/state/studio.actions';
import { StudioSelectors } from '../studios-list/state/studio.selectors';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class AddAppointmentComponent implements OnInit {
  @Select(StudioSelectors.getSelectedStudio)
  public studio$!: Observable<Studio>;

  public timeCtrl = new FormControl('8:00');
  public dateCtrl = new FormControl('Tomorrow');

  private studio: Studio | undefined = undefined;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studio$.subscribe((studio) => {
      this.studio = studio;
    });

    this.route.params.subscribe((params) => {
      const studioId = +params['studio'];
      this.store.dispatch(new GetStudio(studioId));
    });
  }

  createAppointment() {
    if (this.studio) {
      this.store
        .dispatch(
          new CreateAppointment(
            this.studio,
            this.dateCtrl.value,
            this.timeCtrl.value
          )
        )
        .subscribe(() => {
          this.router.navigate(['/appointments']);
        });
    }
  }
}
