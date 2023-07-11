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
    console.log(this.note);
    this.service.setDate(this.note.date);
  }

  dateFormat():string{
    return `${this.service.formatDayOfWeek()} the ${this.service.formatDate()}
    of ${this.service.formatMonth()},${this.note.date.getFullYear()}.\n
    ${this.service.formatTime()}`;
  }
}
