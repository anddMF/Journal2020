import { ModalComponent } from './../shared/modal/modal.component';
import { NoteCreateComponent } from 'src/app/Home/note-create/note-create.component';
import { NoteComponent } from './../note/note.component';
import { NotesHubComponent } from './notes-hub.component';


import { ModalService } from './../../_services/modal/modal.service';
import { NotesServiceStub } from './../../_services/notes/notes.service.mock';
import { NotesService } from './../../_services/notes/notes.service';

import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('NotesHubComponent', () => {
  let component: NotesHubComponent;

  let fixture: ComponentFixture<NotesHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, BrowserModule, AppRoutingModule],
      declarations: [NotesHubComponent, NoteComponent, NoteCreateComponent, ModalComponent],
      providers: [{ provide: NotesService, useClass: NotesServiceStub }, ModalService]
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
