import { Injectable } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ProgressMetric } from 'projects/base-components/src/lib/models/progress.models';
import { WorkoutProgressService } from 'projects/base-components/src/lib/workout-progress.service';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardFacade {
  private visitsChartSubject = new BehaviorSubject<EChartsOption | undefined>(undefined);

  public visitsData$ = this.visitsChartSubject.asObservable();

  constructor(private progressService: WorkoutProgressService) {}

  public getDashboardData() {
    this.progressService
      .getVisits()
      .pipe(map(this.convertVisitsToEcharts))
      .subscribe((visits) => (this.visitsChartSubject.next(visits)));
  }

  private convertVisitsToEcharts(metrics: ProgressMetric[]) {
    const opts: EChartsOption = {
      xAxis: {
        type: 'category',
        data: metrics.map((_, i) => i),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: metrics.map((v) => v.metric),
          type: 'line',
          smooth: true,
        },
      ],
      animation: false,
    };

    return opts;
  }
}
