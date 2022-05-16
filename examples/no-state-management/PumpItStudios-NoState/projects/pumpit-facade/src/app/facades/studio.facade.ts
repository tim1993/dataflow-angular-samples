import { Injectable } from '@angular/core';
import { Studio } from 'projects/base-components/src/lib/models/studio.model';
import { StudioService } from 'projects/base-components/src/lib/studio.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudioFacade {
  private studiosSubject = new BehaviorSubject<Studio[] | null>(null);
  private studioSubject = new BehaviorSubject<Studio | null>(null);

  public studios$ = this.studiosSubject.asObservable();
  public studio$ = this.studioSubject.asObservable();

  constructor(private studioService: StudioService) {}

  public getStudios() {
    this.studioService.get().subscribe((s) => (this.studiosSubject.next(s)));
  }

  public getStudioDetails(studioId: number) {
    this.studioService.details(studioId).subscribe((s) => (this.studioSubject.next(s)));
  }
}
