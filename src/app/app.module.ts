import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MaterialModule } from './material.modul';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule } from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    ChartComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    HttpClientModule,

    ReactiveFormsModule,
    ChartsModule,
    FormsModule,
    NgbModule,

    MaterialModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    


  ],
  providers: [
    ThemeService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
