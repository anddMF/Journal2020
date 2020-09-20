import { NotesHubComponent } from './../../Home/notes-hub/notes-hub.component';
import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { NotifyService } from './notify.service';
import { AppComponent } from 'src/app/app.component';
import { NotifyComponent } from 'src/app/Home/shared/notify/notify.component';
import { NoteComponent } from 'src/app/Home/note/note.component';
import { NoteCreateComponent } from 'src/app/Home/note-create/note-create.component';
import { FormsModule } from '@angular/forms';

describe('NotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ AppRoutingModule, FormsModule],
    declarations: [ AppComponent, NotifyComponent, NotesHubComponent, NoteComponent, NoteCreateComponent ]
  }));

  it('should be created', () => {
    const service: NotifyService = TestBed.get(NotifyService);
    expect(service).toBeTruthy();
  });

  // it('should do a subject.next after success', () => {
  //   const service: NotifyService = TestBed.get(NotifyService);

  //   service.success('teste sucesso', 'mensagem');
  //   console.log()
  // })
});
