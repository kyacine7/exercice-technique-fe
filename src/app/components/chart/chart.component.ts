import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { MapperService } from 'src/app/services/mapper/mapper.service';
import { PersistenceService } from 'src/app/services/persistence/persistence.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


   // Chart needs 

   private minDate: Date;
   private maxDate: Date;
   private chartDataDB;
   private splitDatesByYears: Date[] = [];
   private selectedDate;
 
   ChartData: ChartDataSets[] = [{
     data: [],
     label: 'Values Sum by Day',
     fill: false
   }];
   ChartLabels: Label[] = [];
   ChartOptions = {
     responsive: true,
   };
   ChartColors: Color[] = [
     {
       borderColor: 'black',
       backgroundColor: 'FFFFFF',
     },
   ];
   ChartLegend = true;
   ChartPlugins = [];
   ChartType = 'line';
 
   ////

  constructor(private serviceAPI: PersistenceService, private mapper: MapperService, private datepipe: DatePipe) { }

  ngOnInit() {
    this.buildChartOnInit();
  }

  loadChartDataSet(fromDate) {

    this.serviceAPI.getYearDataOnChoosenDate(fromDate).subscribe(elements => {

      this.chartDataDB = this.mapper.mapChartData(elements);

      this.ChartData[0].data = this.chartDataDB.chartValues;
      this.ChartLabels = this.chartDataDB.chartDates;

    });

  }

  splitDataByYears() {

    let afterYearDate = this.mapper.date(this.minDate);
    let limitYearDate = this.mapper.date(this.maxDate);

    let splits = [];

    for (afterYearDate;
      afterYearDate < limitYearDate;
      afterYearDate.setFullYear(afterYearDate.getFullYear() + 1)) {

      splits.push(this.datepipe.transform(afterYearDate, 'yyyy-MM-dd'));

    }

    return splits;

  }

  buildChartOnInit() {

    this.serviceAPI.getMinMaxDates().subscribe(elements1 => {

      this.minDate = elements1[0][0];
      this.maxDate = elements1[0][1];

      this.splitDatesByYears = this.splitDataByYears();

      this.loadChartDataSet(this.minDate);


    });


  }

  buildChartOnSelectedDate(selectedDate) {

    console.log("clicked")
    this.loadChartDataSet(selectedDate);

  }
}
