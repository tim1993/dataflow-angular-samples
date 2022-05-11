import { StateContext } from '@ngxs/store';
import { EChartsOption } from 'echarts';
import { ProgressMetric } from 'projects/base-components/src/lib/models/progress.models';
import { WorkoutProgressService } from 'projects/base-components/src/lib/workout-progress.service';
import { map, tap } from 'rxjs';
import { GetDashboardData } from './dashboard.actions';
import { IDashboardStateModel } from './dashboard.state.model';

export const getDashboardData =
  (progressService: WorkoutProgressService) =>
  (
    { patchState }: StateContext<IDashboardStateModel>,
    _: GetDashboardData
  ) => {
    return progressService.getVisits().pipe(
      map(convertVisitsToEcharts),
      tap((visits) => {
        patchState({
          visitsData: visits,
        });
      })
    );
  };

export function convertVisitsToEcharts(metrics: ProgressMetric[]) {
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
