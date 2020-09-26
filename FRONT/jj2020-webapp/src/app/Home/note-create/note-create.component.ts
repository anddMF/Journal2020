import { ModalService } from './../../_services/modal/modal.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Note } from 'src/app/_models/note.model';
import { NotesService } from 'src/app/_services/notes/notes.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  newNote: Note;
  constructor(private svcNotes: NotesService, private location: Location, private svcModal: ModalService) { 
    this.newNote = new Note();
    this.newNote.title = 'Nova nota';
    this.newNote.favorite = false;
    this.newNote.note_text = 'hoje o dia começou...';
    this.newNote.id_user = 3;
    this.newNote.active = true;
  }

  ngOnInit() {
  }

  salvar(){
    this.svcNotes.postNote(this.newNote).subscribe(() => this.closeModal())
  }

  goBack(){
    this.location.back();
  }

  closeModal(){
    this.svcModal.close('create-modal')
  }
}
