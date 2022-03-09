import { TestBed } from '@angular/core/testing';

import { MockwebshopService } from './mockwebshop.service';

describe('MockwebshopService', () => {
  let service: MockwebshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockwebshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
