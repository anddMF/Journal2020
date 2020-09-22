
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotifyComponent } from './Home/shared/notify/notify.component';
import { NotesHubComponent } from './Home/notes-hub/notes-hub.component';
import { NoteComponent } from './Home/note/note.component';
import { NoteCreateComponent } from './Home/note-create/note-create.component';
import { ModalComponent } from './Home/shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NotifyComponent,
    NotesHubComponent,
    NoteComponent,
    NoteCreateComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
