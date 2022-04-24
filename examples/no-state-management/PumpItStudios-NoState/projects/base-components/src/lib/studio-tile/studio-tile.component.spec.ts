import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioTileComponent } from './studio-tile.component';

describe('StudioTileComponent', () => {
  let component: StudioTileComponent;
  let fixture: ComponentFixture<StudioTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
