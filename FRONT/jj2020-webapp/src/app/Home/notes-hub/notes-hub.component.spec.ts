import { NoteComponent } from './../note/note.component';
import { NotesServiceStub } from './../../_services/notes/notes.service.mock';
import { NotesService } from './../../_services/notes/notes.service';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesHubComponent } from './notes-hub.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('NotesHubComponent', () => {
  let fakeNote = {
    
  }
  let component: NotesHubComponent;

  let fixture: ComponentFixture<NotesHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [ NotesHubComponent, NoteComponent ],
      providers: [{ provide: NotesService, useClass: NotesServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "listNotesFavorites" populated', () => {
    expect(component.listNotesFavorites.length).toBeGreaterThan(0)
  });

  it('should have "listNotes" populated', () => {
    expect(component.listNotes.length).toBeGreaterThan(0);
  })

  it('should render listNotesFavorites in HTML', () => {
    const obj = fixture.debugElement.query(By.css('.listFav')).nativeElement;

    expect(obj.childNodes[1].innerHTML).not.toBeNull();
  })

  it('should render listNotes in HTML', () => {
    const obj = fixture.debugElement.query(By.css('.listUnFav')).nativeElement;

    expect(obj.childNodes[1].innerHTML).not.toBeNull();
  })
});
