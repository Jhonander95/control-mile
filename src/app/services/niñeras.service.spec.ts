import { TestBed } from '@angular/core/testing';

import { NiñerasService } from './niñeras.service';

describe('NiñerasService', () => {
  let service: NiñerasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NiñerasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
