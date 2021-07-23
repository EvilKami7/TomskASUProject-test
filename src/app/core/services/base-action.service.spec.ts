import { TestBed } from '@angular/core/testing';

import { BaseActionService } from './base-action.service';

describe('BaseActionService', () => {
  let service: BaseActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
