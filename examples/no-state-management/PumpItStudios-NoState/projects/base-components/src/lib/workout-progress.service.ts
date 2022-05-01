import { Injectable } from '@angular/core';
import { map, mapTo, switchMap, timer } from 'rxjs';
import { visitMetrics } from './data/progress.data';
import { ProgressMetric } from './models/progress.models';

@Injectable({
  providedIn: 'root',
})
export class WorkoutProgressService {
  private _visits: ProgressMetric[] = [];
  constructor() {}

  getVisits() {
    return timer(0).pipe(map(() => visitMetrics));
  }

  addVisit(count: number) {
    const latest = this._visits.length
      ? this._visits[this._visits.length]
      : visitMetrics[visitMetrics.length];

    this._visits.push({ metric: latest.metric + count });
    return timer(0).pipe(map(() => [...visitMetrics, ...this._visits]));
  }
}
