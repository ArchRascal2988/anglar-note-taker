import { Component, Input } from '@angular/core';
import { DateService } from '../date.service';
import { Note } from '../interfaces';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  providers: [DateService]
})

export class NoteComponent {
  @Input() note!: Note;

  constructor(private service:DateService){
  }

  dateFormat():string{
    // let date:number= this.note.date.getDate();
    // let suffix:string= suffixes.get(date) ? suffixes.get(date)! : "th";

    // return `${this.note.date.getDay()} the ${date}${suffix}, 
    // ${this.note.date.getFullYear()}`;
    return '';
  }
}
