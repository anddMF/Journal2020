import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';
import { Note } from 'src/app/_models/note.model';

import { NotesService } from './notes.service';

describe('NotesService', () => {
  let service: NotesService;
  let httpServiceSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
      // providers: [{ provide: HttpClient, useValue: spy }]
    })
    httpServiceSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new NotesService(httpServiceSpy as any);
    // httpServiceSpy = TestBed.get(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    const service: NotesService = TestBed.get(NotesService);
    expect(service).toBeTruthy();
  });

  it('should return stub value from get', () => {
    const stub: Note[] = [

      {
        id: 1,
        active: true,
        favorite: true,
        note_text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quasi nisi accusantium.',
        title: 'NOTE 1titulo',
        dt_creation: null,
        dt_edit: null,
        id_user: 3,
        id_user_shared: 0,
        main_user: null,
        shared_user: null,
        tag: ''
      }

    ]

    httpServiceSpy.get.and.returnValue(of(stub));
    service.getNotes().subscribe(res => 
      expect(res).toEqual(stub, 'stub'),
      fail
    )

    expect(httpServiceSpy.get.calls.count()).toBe(1, 'one call')
    // expect(service.getNotes()).toBe(stub, '')
  })
});
