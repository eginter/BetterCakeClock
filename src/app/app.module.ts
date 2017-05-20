import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SingleDayComponent } from './single-day/single-day.component';
import { WeeklyViewComponent } from './weekly-view/weekly-view.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';



@NgModule({
  declarations: [
    AppComponent,
    SingleDayComponent,
    WeeklyViewComponent,
    DashboardViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'daily',
        component: SingleDayComponent
      },
      {
        path: 'weekly',
        component: WeeklyViewComponent
      },
      {
        path: 'dashboard',
        component: DashboardViewComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
