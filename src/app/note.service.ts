import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Note } from './interfaces';

const noteRawData= require('../notes.json');



@Injectable({
  providedIn: 'root'
})

export class NoteService {
  private noteData:Array<Note>= [];

  constructor(private logger:LoggerService){

  }

  getNoteData():Array<Note>{
    this.logger.log(`Raw data read: ${noteRawData.notes}`);
    for(const note of noteRawData.notes){
      note.date= new Date(note.date);

      this.noteData.push(note);
    }
    this.logger.log(`Data added: ${this.noteData}`)

    return this.noteData;
  }
}
