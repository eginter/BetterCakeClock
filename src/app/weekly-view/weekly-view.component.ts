import {Component, OnInit, OnChanges} from '@angular/core';
import { Day } from '../day';

@Component({
  selector: 'app-weekly-view',
  templateUrl: './weekly-view.component.html',
  styleUrls: ['./weekly-view.component.css']
})
export class WeeklyViewComponent implements OnInit, OnChanges {

  day: Day;
  list: Day[] = [];
  total: number;

  constructor() {

  }

  ngOnInit() {
    this.day = new Day(new Date());
    for (let i = 0; i < 7; i++ ) {
      this.list.push(new Day(new Date()));
    }
    console.log(this.list);
  }
  updateTotalTime(): void {
    this.total = 0;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].getTotalMinutes()){
        this.total += this.list[i].getTotalMinutes();
      }
    }
  }
  ngOnChanges(){
    this.updateTotalTime();
  }

}
