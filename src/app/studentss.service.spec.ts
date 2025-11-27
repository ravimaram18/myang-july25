import { TestBed } from '@angular/core/testing';

import { StudentssService } from './studentss.service';

describe('StudentssService', () => {
  let service: StudentssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
