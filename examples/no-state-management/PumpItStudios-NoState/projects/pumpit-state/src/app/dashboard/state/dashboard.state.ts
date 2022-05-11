import { Injectable } from "@angular/core";
import { attachAction } from "@ngxs-labs/attach-action";
import { State } from "@ngxs/store";
import { WorkoutProgressService } from "projects/base-components/src/lib/workout-progress.service";
import { GetDashboardData } from "./dashboard.actions";
import { getDashboardData } from "./dashboard.handlers";
import { dashboardStateModelDefault, IDashboardStateModel } from "./dashboard.state.model";

@State<IDashboardStateModel>({
  name: 'Dashboard',
  defaults: dashboardStateModelDefault,
})
@Injectable()
export class DashboardState {
  constructor(progressService: WorkoutProgressService) {
    attachAction(DashboardState, GetDashboardData, getDashboardData(progressService));
  }
}
