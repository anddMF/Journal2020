import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { ActionTypes } from '../_actions/notes.actions';

import { NotesService } from './../_services/notes/notes.service';

@Injectable()
export class NoteEffects {

    @Effect()
    loadNotes$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.GetAll),
        mergeMap(() => this.svcNote.getNotes().pipe(
            map(notes => ({ type: ActionTypes.GetAll, payload: notes})), 
            catchError(() => EMPTY)
        ))
    ));

    constructor(private actions$: Actions, private svcNote: NotesService){

    }

}