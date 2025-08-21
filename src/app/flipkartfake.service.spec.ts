import { TestBed } from '@angular/core/testing';

import { FlipkartfakeService } from './flipkartfake.service';

describe('FlipkartfakeService', () => {
  let service: FlipkartfakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartfakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
