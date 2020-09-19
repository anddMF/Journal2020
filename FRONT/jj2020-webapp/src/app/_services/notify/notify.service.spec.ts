import { TestBed } from '@angular/core/testing';

import { NotifyService } from './notify.service';

describe('NotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: NotifyService = TestBed.get(NotifyService);
    expect(service).toBeTruthy();
  });
});
