import { TestBed } from '@angular/core/testing';

import { MockcategoriesService } from './mockcategories.service';

describe('MockcategoriesService', () => {
  let service: MockcategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockcategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
