import { TestBed } from '@angular/core/testing';

import { SheetsGoogleService } from './sheets-google.service';

describe('SheetsGoogleService', () => {
  let service: SheetsGoogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheetsGoogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
