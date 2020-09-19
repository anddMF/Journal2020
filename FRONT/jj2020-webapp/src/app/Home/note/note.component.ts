import { Note } from 'src/app/_models/note.model';
import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/_services/notes/notes.service';
import { NoteType } from 'src/app/_models/css-class.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() noteInput: Note;

  constructor(private svcNotes: NotesService) { }

  ngOnInit() {
  }

  updateNote(){
    console.log('note update');
    console.log(this.noteInput)
    this.svcNotes.updateNote(this.noteInput).subscribe(() => console.log('subs update'));
  }

  cssClass() {
    switch (this.noteInput.favorite) {
      case true:
        return 'favorite';
      case false:
        return 'common';
      case null:
        return 'common';
    }
  }

}
