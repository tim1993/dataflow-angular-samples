import { Injectable } from '@angular/core';
import { Studio } from 'projects/base-components/src/lib/models/studio.model';
import { StudioService } from 'projects/base-components/src/lib/studio.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudioFacade {
  private studioSubject = new BehaviorSubject<Studio[] | null>(null);

  public studio$ = this.studioSubject.asObservable();

  constructor(private studioService: StudioService) {}

  public getStudios() {
    this.studioService.get().subscribe((s) => (this.studioSubject.next(s)));
  }

  public getDetails(studioId: number): Observable<Studio> {
    return this.studioService.details(studioId);
  }
}
