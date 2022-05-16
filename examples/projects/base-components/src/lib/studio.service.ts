import { Injectable } from '@angular/core';
import { of, switchMap, throwError, timer } from 'rxjs';
import { studios } from './data/studio.data';

@Injectable({
  providedIn: 'root',
})
export class StudioService {
  constructor() {}

  get() {
    return timer(1).pipe(switchMap(() => of(studios)));
  }

  details(id: number) {
    const studio = studios.find((s) => s.id === id);
    return studio
      ? timer(1).pipe(switchMap(() => of(studio)))
      : throwError(() => 'Not found');
  }
}
