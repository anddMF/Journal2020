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

  initiateUser() {
    this.userMock.id = 4;
    this.userMock.name_user = 'Andrew Moraes'
  }

}
