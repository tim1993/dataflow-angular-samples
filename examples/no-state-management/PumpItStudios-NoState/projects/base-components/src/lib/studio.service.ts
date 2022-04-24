import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { studios } from './data/studio.data';

@Injectable({
  providedIn: 'root'
})
export class StudioService {

  constructor() { }

  get() {
    return of(studios);
  }
}
