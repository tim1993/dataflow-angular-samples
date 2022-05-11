import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiosListComponent } from './studios-list.component';

describe('StudiosListComponent', () => {
  let component: StudiosListComponent;
  let fixture: ComponentFixture<StudiosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
