import { TestBed } from '@angular/core/testing';

import { TalentsService } from './talents.service';

describe('TalentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TalentsService = TestBed.get(TalentsService);
    expect(service).toBeTruthy();
  });
});
