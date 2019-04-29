import { TestBed } from '@angular/core/testing';

import { CalculatorsettingsService } from './calculatorsettings.service';

describe('CalculatorsettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorsettingsService = TestBed.get(CalculatorsettingsService);
    expect(service).toBeTruthy();
  });
});
