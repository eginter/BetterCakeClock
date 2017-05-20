import {Component, Input, OnInit} from '@angular/core';
import { Day } from '../day';

@Component({
  selector: 'app-single-day',
  templateUrl: './single-day.component.html',
  styleUrls: ['./single-day.component.css']
})
export class SingleDayComponent implements OnInit {

  @Input() day: Day;
  @Input() offset: number;

  constructor() { }

  ngOnInit() {
    // this.day = new Date();
  }



}
