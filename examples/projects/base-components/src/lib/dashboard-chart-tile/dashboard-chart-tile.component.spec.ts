import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChartTileComponent } from './dashboard-chart-tile.component';

describe('DashboardChartTileComponent', () => {
  let component: DashboardChartTileComponent;
  let fixture: ComponentFixture<DashboardChartTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardChartTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChartTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
