import { EChartsOption } from "echarts";

export interface IDashboardStateModel {
  visitsData: EChartsOption | null
}

export const dashboardStateModelDefault: IDashboardStateModel = {
  visitsData: null,
};
