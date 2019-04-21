import { TestBed } from '@angular/core/testing';

import { ErrMsgService } from './err-msg.service';

describe('ErrMsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrMsgService = TestBed.get(ErrMsgService);
    expect(service).toBeTruthy();
  });
});
