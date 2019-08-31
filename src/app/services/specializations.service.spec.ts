import { TestBed } from '@angular/core/testing';

import { SpecializationsService } from './specializations.service';

describe('SpecializationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecializationsService = TestBed.get(SpecializationsService);
    expect(service).toBeTruthy();
  });
});
