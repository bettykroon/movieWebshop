import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(AdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getOrders function', () => {
    expect(service.getOrders).toBeTruthy();
  });

  it('should have deleteOrder function', () => {
    expect(service.deleteOrder).toBeTruthy();
  });

  it('should have order function', () => {
    expect(service.order).toBeTruthy();
  });
});
