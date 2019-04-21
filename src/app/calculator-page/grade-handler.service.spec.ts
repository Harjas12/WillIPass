import { TestBed } from '@angular/core/testing';

import { GradeHandlerService } from './grade-handler.service';

describe('GradeHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GradeHandlerService = TestBed.get(GradeHandlerService);
    expect(service).toBeTruthy();
  });
});
