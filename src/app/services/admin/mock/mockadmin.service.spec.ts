import { TestBed } from '@angular/core/testing';

import { MockadminService } from './mockadmin.service';

describe('MockadminService', () => {
  let service: MockadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
