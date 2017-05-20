import {Component, OnInit, ViewChild} from '@angular/core';
import { MdDatepicker } from '@angular/material';
import { Day } from '../day';

@Component({
  selector: 'app-weekly-view',
  templateUrl: './weekly-view.component.html',
  styleUrls: ['./weekly-view.component.css']
})
export class WeeklyViewComponent implements OnInit {

  @ViewChild(MdDatepicker) dp: MdDatepicker<Date>;

  day: Day;

  constructor() {
  }

  ngOnInit() {
    this.day = new Day(new Date);
  }

  addDays(numberOfDays: number): Day {
    return new Day(new Date(this.day.date.getDate() + numberOfDays));
  }
  // updateDate(date: Date): void {
  //   this.day.date = date;
  //   console.log('the date ' +  this.date);
  // }

}
