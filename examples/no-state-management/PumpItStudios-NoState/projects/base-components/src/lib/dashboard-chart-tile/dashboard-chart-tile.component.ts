import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'pumpit-dashboard-chart-tile',
  templateUrl: './dashboard-chart-tile.component.html',
  styleUrls: ['./dashboard-chart-tile.component.scss'],
})
export class DashboardChartTileComponent implements OnInit {
  @Input() public chartTitle?: string;

  public options: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      animation: false,
    },
    yAxis: {
      type: 'value',
      animation: false,
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
