import { TestBed, inject } from '@angular/core/testing';

import { ContactCrudService } from './contact-crud.service';

describe('ContactCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactCrudService]
    });
  });

  it('should be created', inject([ContactCrudService], (service: ContactCrudService) => {
    expect(service).toBeTruthy();
  }));
});
