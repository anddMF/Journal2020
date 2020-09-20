import { By } from '@angular/platform-browser';
import { NotesServiceStub } from './../../_services/notes/notes.service.mock';
import { NotesService } from './../../_services/notes/notes.service';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NoteComponent } from './note.component';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [ NoteComponent ],
      providers: [{ provide: NotesService, useClass: NotesServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateNote after click on button', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('.btn');
    // const btn = fixture.debugElement.query(By.css('btn'));
    // const btn = fixture.debugElement.nativeElement.querySelector('#usr-1')
    console.log('butttttttton')
    console.log(btn);

    btn.click();
  });
});
