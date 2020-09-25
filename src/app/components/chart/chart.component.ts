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
   private startDate ;
   private endDate;
   private origines :string[] = [];
   private choosenOrigine:string ='noOrigine';
 
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

  loadChartDataSet(date) {

    this.serviceAPI.getYearDataOnChoosenRange(this.choosenOrigine,date).subscribe(elements => {
      
      this.chartDataDB = this.mapper.mapChartData(elements);

      this.ChartData[0].data = this.chartDataDB.chartValues;
      this.ChartLabels = this.chartDataDB.chartDates;

    });

  }


  buildChartOnInit() {

    this.serviceAPI.getMinMaxDates().subscribe(elements1 => {
      this.origines = elements1[1];
      elements1 = elements1[0];      
      this.minDate = elements1[0][0];
      this.maxDate = elements1[0][1];

      this.splitDatesByYears = this.mapper.splitDataByYears(this.minDate,this.maxDate);

      this.loadChartDataSet(this.minDate);

    });


  }

  buildChartOnSelectedRange(){
    this.startDate = this.datepipe.transform(this.startDate, 'yyyy-MM-dd');
    this.endDate = this.datepipe.transform(this.endDate, 'yyyy-MM-dd');
    

    this.serviceAPI.getOnChoosenRange(this.choosenOrigine,this.startDate,this.endDate).subscribe(elements => {

      this.chartDataDB = this.mapper.mapChartData(elements);

      this.ChartData[0].data = this.chartDataDB.chartValues;
      this.ChartLabels = this.chartDataDB.chartDates;

    });
  }
}
