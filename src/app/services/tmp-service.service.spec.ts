import { TestBed, inject } from '@angular/core/testing';

import { TmpServiceService } from './tmp-service.service';

describe('TmpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmpServiceService]
    });
  });

  it('should be created', inject([TmpServiceService], (service: TmpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
