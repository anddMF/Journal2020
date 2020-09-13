import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesHubComponent } from './Home/notes-hub/notes-hub.component';

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'notes', component: NotesHubComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
