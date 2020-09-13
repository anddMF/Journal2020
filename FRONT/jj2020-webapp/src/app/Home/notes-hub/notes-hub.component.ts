import { NotesService } from './../../_services/notes/notes.service';
import { Component, OnInit } from '@angular/core';

import { Note } from './../../_models/note.model';
import { User } from './../../_models/user.model';

@Component({
  selector: 'app-notes-hub',
  templateUrl: './notes-hub.component.html',
  styleUrls: ['./notes-hub.component.css']
})
export class NotesHubComponent implements OnInit {

  userMock: User;
  listNotes: Note[] = [];
  listNotesFavorites: Note[] = [];
  listStub: Note[] = [];

  typeCssF = 'favorite'
  typeCssC = 'common'

  constructor(private svcNotes: NotesService) {
    this.userMock = new User();
  }

  ngOnInit() {
    this.initiateUser();
    // this.initiateNotes();
    this.getNotes();
  }

  getNotes(){
    console.log('hub')

    this.svcNotes.getNotes().subscribe(res => {
      res.forEach(x => {
        if(x.favorite){
          this.listNotesFavorites.push(x)
        } else {
          this.listNotes.push(x)
        }
      })
    } );
  }

  updateNotes(note: Note){
    console.log('hub update');
    console.log(note)
    this.svcNotes.updateNote(note).subscribe(() => console.log('subs update'));
  }

  initiateUser() {
    this.userMock.id = 4;
    this.userMock.name_user = 'Andrew Moraes'
  }

  initiateNotes() {
    let note1 = new Note();
    note1.id = 1;
    note1.active = true;
    note1.favorite = false;
    note1.note_text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quasi nisi accusantium.'
    note1.title = 'NOTE 1titulo';
    this.listStub.push(note1);
    console.log(this.listStub)

    let note2 = new Note();
    note2.id = 2;
    note2.active = true;
    note2.favorite = true;
    note2.note_text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quasi nisi accusantium. Aut quasi nisi accusantium. Aut quasi nisi accusantium.'
    note2.title = 'TITULO mermao';
    this.listStub.push(note2);
    console.log(this.listStub)

    let note3 = new Note();
    note2.id = 3;
    note2.active = true;
    note2.favorite = true;
    note2.note_text = 'Lorem ipsum dolor sit amet asdasdasdasdasd consectetur adipisicing elit. Aut quasi nisi accusantium. Aut quasi nisi accusantium. Aut quasi nisi accusantium.'
    note2.title = 'T NOTE 3';
    this.listStub.push(note3);
console.log(this.listStub)

    let note4 = new Note();
    note2.id = 4;
    note2.active = true;
    note2.favorite = false;
    note2.note_text = 'Lorem ipsum dolor sit amet asdasdasdasdasd consectetur adipisicing elit. Aut quasi nisi accusantium. Aut quasi nisi accusantium. Aut quasi nisi accusantium.'
    note2.title = 'T NOTE 4';


    this.listStub.push(note4);
    console.log(this.listStub)

    for (let i = 0; i < this.listStub.length; i++) {
      const note = this.listStub[i];
      console.log('entrou');
      console.log(note)
      console.log(note.title)
      if (note.favorite) {
        console.log('favorite')
        this.listNotesFavorites.push(note);
      } else {
        this.listNotes.push(note);
      }
    }
    console.log(this.listNotesFavorites.length)
  }

}
