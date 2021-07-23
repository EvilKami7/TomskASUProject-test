import { TestBed } from '@angular/core/testing';

import { PersonsProviderService } from './persons-provider.service';

describe('PersonProviderService', () => {
  let service: PersonsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
