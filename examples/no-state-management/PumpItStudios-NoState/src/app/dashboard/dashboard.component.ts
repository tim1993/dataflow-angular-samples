import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ProgressMetric } from 'projects/base-components/src/lib/models/progress.models';
import { WorkoutProgressService } from 'projects/base-components/src/lib/workout-progress.service';
import { map } from 'rxjs';
import { changeDectionStrategy } from '../app.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class DashboardComponent implements OnInit {
  public visitsEchart?: EChartsOption;
  constructor(private progressService: WorkoutProgressService) {}

  ngOnInit(): void {
    this.progressService
      .getVisits()
      .pipe(map(this.convertVisitsToEcharts))
      .subscribe((visits) => (this.visitsEchart = visits));
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
