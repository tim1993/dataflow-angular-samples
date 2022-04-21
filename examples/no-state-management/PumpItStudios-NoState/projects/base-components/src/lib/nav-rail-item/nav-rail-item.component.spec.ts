import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRailItemComponent } from './nav-rail-item.component';

describe('NavRailItemComponent', () => {
  let component: NavRailItemComponent;
  let fixture: ComponentFixture<NavRailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavRailItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
