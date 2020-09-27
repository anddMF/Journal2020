
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

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule,  
  MatIconModule,  
  MatCardModule,  
  MatButtonModule,  
  MatProgressBarModule } from '@angular/material';
import { NoteEditComponent } from './Home/note-edit/note-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NotifyComponent,
    NotesHubComponent,
    NoteComponent,
    NoteCreateComponent,
    ModalComponent,
    NoteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,  
    MatToolbarModule,  
    MatIconModule,  
    MatButtonModule,  
    MatCardModule,  
    MatProgressBarModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
