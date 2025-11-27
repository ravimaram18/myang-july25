import { TestBed } from '@angular/core/testing';

import { VehiclessService } from './vehicless.service';

describe('VehiclessService', () => {
  let service: VehiclessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
