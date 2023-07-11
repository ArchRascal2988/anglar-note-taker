import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { HeaderComponent } from './header/header.component';
import { BtnComponent } from './btn/btn.component';
import { NoteDisplayComponent } from './note-display/note-display.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    HeaderComponent,
    BtnComponent,
    NoteDisplayComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
