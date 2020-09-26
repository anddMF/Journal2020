import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ModalService ]
    })

    service = TestBed.get(ModalService);
  });

  it('should be created', () => {
    const service: ModalService = TestBed.get(ModalService);
    expect(service).toBeTruthy();
  });

  it('should add new modal', () => {
    service.add({id: 'testemodal'});

    expect(service['modals'].length).toBeGreaterThan(0);
    expect(service['modals'][0].id).toBe('testemodal');
  })

  it('should remove a modal added', () => {
    service.add({id: 'testemodal'});
    expect(service['modals'][0].id).toBe('testemodal');

    service.remove('testemodal');

    expect(service['modals'].length).toBe(0);
  })

  it('shoul open a modal added', () => {
    service.add({id: 'testemodal'});
    expect(service['modals'][0].id).toBe('testemodal');

    service.open('testemodal');

    expect(service['modals'][0].open).toHaveBeenCalled();
  })
});
