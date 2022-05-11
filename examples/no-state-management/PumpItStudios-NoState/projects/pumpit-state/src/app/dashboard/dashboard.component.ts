import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { EChartsOption } from 'echarts';
import { Observable } from 'rxjs';
import { changeDectionStrategy } from '../app.config';
import { GetDashboardData } from './state/dashboard.actions';
import { DashboardSelectors } from './state/dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class DashboardComponent implements OnInit {
  @Select(DashboardSelectors.getDashboardData)
  public visitsData$!: Observable<EChartsOption>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetDashboardData());
  }
}
