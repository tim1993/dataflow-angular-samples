import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { studios } from './data/studio.data';

@Injectable({
  providedIn: 'root',
})
export class StudioService {
  constructor() {}

  get() {
    return of(studios);
  }

  details(id: number) {
    const studio = studios.find((s) => s.id === id);
    return studio ? of(studio) : throwError(() => 'Not found');
  }
}
