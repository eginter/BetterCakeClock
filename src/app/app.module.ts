import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { SingleDayComponent } from './single-day/single-day.component';
import { WeeklyViewComponent } from './weekly-view/weekly-view.component';
import { HomeViewComponent } from './home-view/home-view.component';

import { MdDatepickerModule, MdNativeDateModule, MdInputModule } from '@angular/material';
import { DailyViewComponent } from './daily-view/daily-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleDayComponent,
    WeeklyViewComponent,
    HomeViewComponent,
    DailyViewComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdInputModule,
    MomentModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'daily',
        component: DailyViewComponent
      },
      {
        path: 'weekly',
        component: WeeklyViewComponent
      },
      {
        path: 'home',
        component: HomeViewComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
