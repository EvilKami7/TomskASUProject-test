import { TestBed } from '@angular/core/testing';

import { ActionDeterminateService } from './action-determinate.service';

describe('ActionDeterminateService', () => {
  let service: ActionDeterminateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionDeterminateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
