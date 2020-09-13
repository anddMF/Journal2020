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
  @Input() type: string;
  constructor(private svcNotes: NotesService) { }

  ngOnInit() {
    console.log('component');
    console.log(this.noteInput)
  }

  updateNote(){
    console.log('note update');
    console.log(this.noteInput)
    this.svcNotes.updateNote(this.noteInput).subscribe(() => console.log('subs update'));
  }

  cssClass(tipo: string) {
    if (!tipo){
      return;
    }

    switch (tipo) {
      case 'favorite':
        return 'favorite';
      case 'common':
        return 'common';
      case '':
        return 'default';
    }
  }

}
