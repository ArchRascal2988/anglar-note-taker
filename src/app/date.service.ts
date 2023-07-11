import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  date:Date= new Date();

  dateSuffixes:Map<number, string>= new Map([
    [1, "st"],
    [2, "nd"],
    [3, "rd"]
  ]);

  days:Map<number, string>= new Map([
    [0, "Sunday"],
    [1, "Monday"],
    [2, "Tuesday"],
    [3, "Wednesday"],
    [4, "Thursday"],
    [5, "Friday"],
    [6, "Saturday"]
  ]);

  months:Map<number, string>= new Map([
    [0, "January"],
    [1, "February"],
    [2, "March"],
    [3, "April"],
    [4, "May"],
    [5, "June"],
    [6, "July"],
    [7, "August"],
    [8, "September"],
    [9, "October"],
    [10, "November"],
    [11, "December"]
  ])

  hours:Map<number, number>= new Map([
    [0, 12],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
    [7, 7],
    [8, 8],
    [9, 9],
    [10, 10],
    [11, 11],
    [12, 12],
    [13, 1],
    [14, 2],
    [15, 3],
    [16, 4],
    [17, 5],
    [18, 6],
    [19, 7],
    [20, 8],
    [21, 9],
    [22, 10],
    [23, 11]
  ])

  setDate(newDate:Date):void{
    this.date= newDate;
  }

  formatDayOfWeek():string{
    let name= this.days.get(this.date.getDay());
    return  name ? name : "";
  }

  formatDate():string{
    let date:number= this.date.getDate();
    let suffix:string = "th";
    if(date < 3){
      suffix= this.dateSuffixes.get(date)!;
    }

    return `${date}${suffix}`;
  }

  formatTime():string{
    let hour= this.hours.get(this.date.getHours());
    let suffix:string= this.date.getHours() >= 12 ? "pm" : "am";

    return  hour ? `${hour}:${this.date.getMinutes()}${suffix}` : "unknown time";
  }

  formatMonth():string{
    let month= this.months.get(this.date.getMonth());
    return month ? month : "";
  }
}
