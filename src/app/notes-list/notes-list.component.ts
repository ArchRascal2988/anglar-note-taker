import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../interfaces';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  providers: [NoteService]
})
export class NotesListComponent implements OnInit{
  notes: Array<Note>= [];

  constructor(private service:NoteService){

  }

  ngOnInit(): void {
    this.notes= this.service.getNoteData();
  }
}
