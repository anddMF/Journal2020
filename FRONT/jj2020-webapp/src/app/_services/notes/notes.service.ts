import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { BaseService } from './../base/base.service';

import { Note } from 'src/app/_models/note.model';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  listNotes: Observable<Note[]>;
  private header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders();
    this.header.append('Content-Type', 'application/json');
   }

  getNotes(): Observable<Note[]> {
    console.log('TEI')
    this.http.get<Note[]>('https://localhost:44368/api/Notes?id_user=3').pipe(res => {
      console.log('resposta get notes');
      console.log(res)
      this.listNotes = res;
      return this.listNotes;
    });
    return  this.listNotes;
  }

  getSingleNotes() {

  }

  putNote() {

  }

  postNote() {

  }
}
