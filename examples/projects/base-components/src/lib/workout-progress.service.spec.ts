import { TestBed } from '@angular/core/testing';

import { WorkoutProgressService } from './workout-progress.service';

describe('WorkoutProgressService', () => {
  let service: WorkoutProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
