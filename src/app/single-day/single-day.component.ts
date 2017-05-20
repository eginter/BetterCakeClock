import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-day',
  templateUrl: './single-day.component.html',
  styleUrls: ['./single-day.component.css']
})
export class SingleDayComponent implements OnInit {

  day: Date;
  constructor() { }

  ngOnInit() {
    this.day = new Date();
  }

}
