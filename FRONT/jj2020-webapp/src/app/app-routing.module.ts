import { NoteEditComponent } from './Home/note-edit/note-edit.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesHubComponent } from './Home/notes-hub/notes-hub.component';
import { NoteCreateComponent } from './Home/note-create/note-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'notes', component: NotesHubComponent },
  { path: 'newnote', component: NoteCreateComponent },
  { path: 'edit', component: NoteEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
