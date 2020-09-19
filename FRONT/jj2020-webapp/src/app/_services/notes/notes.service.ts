import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { BaseService } from './../base/base.service';

import { Note } from 'src/app/_models/note.model';
import { map, tap, catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  // TODO: Variaveis globais em arquivo de ambiente

  listNotes: Observable<Note[]>;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) {
   }

  getNotes(): Observable<Note[]> {
    console.log('TEI')

    return this.http.get<Note[]>('https://localhost:44368/api/Notes?id_user=3').pipe(
      retry(2),
      tap(_ => console.log('GET')),
      catchError(this.handleError<any>('getNotes'))
    )

    // return  this.listNotes;
  }

  getSingleNotes() {

  }

  updateNote(note: Note): Observable<any> {
    console.log('chegou update')
    const url = `https://localhost:44368/notes/${note.id}`;
     return this.http.put(url, JSON.stringify(note), this.httpOptions).pipe(
       retry(1),
       tap(_ => console.log('update')),
       catchError(this.handleError<any>('updateNote'))
     )
  }

  postNote(note: Note) {
    return this.http.post('https://localhost:44368/api/Notes', note, this.httpOptions)
    .pipe(
      tap(_ => console.log('post post')),
      catchError(this.handleError<any>('postNote'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //TODO: enviar erro para serviço de log
      console.error(error);

      //TODO: 
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
