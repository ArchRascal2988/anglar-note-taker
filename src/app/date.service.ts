import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
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


}
