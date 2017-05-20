import { Component, OnInit } from '@angular/core';
import {Day} from '../day';

@Component({
  selector: 'app-daily-view',
  templateUrl: './daily-view.component.html',
  styleUrls: ['./daily-view.component.css']
})
export class DailyViewComponent implements OnInit {

  day: Day;
  constructor() { }

  ngOnInit() {
    this.day = new Day(new Date);
  }

}
