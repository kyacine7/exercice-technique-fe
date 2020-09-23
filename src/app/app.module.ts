import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ChartComponent } from './components/chart/chart.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    ReactiveFormsModule,
    ChartsModule,
    FormsModule,

  ],
  providers: [
    ThemeService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
