import { Selector } from '@ngxs/store';
import { DashboardState } from './dashboard.state';
import { IDashboardStateModel } from './dashboard.state.model';

export class DashboardSelectors {
  @Selector([DashboardState])
  public static getDashboardData(state: IDashboardStateModel) {
    return state.visitsData;
  }
}
