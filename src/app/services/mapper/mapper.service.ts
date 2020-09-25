import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor(private datePipe: DatePipe) { }


  mapChartData(elements) {

    let chartDataDB = {
      chartDates : [],
      chartValues: []
    };

    let elementsDB = elements as Object[];

    for (let index = 0; index < elementsDB.length; index++) {

      let oneDayData = elementsDB[index] as Object[];

      chartDataDB.chartDates.push(oneDayData[0]);
      chartDataDB.chartValues.push(oneDayData[1]);

    }
    
    return chartDataDB;

  }

  splitDataByYears( minDate,maxDate) {

    let afterYearDate = this.date(minDate);
    let limitYearDate = this.date(maxDate);

    let splits = [];

    for (afterYearDate;
      afterYearDate < limitYearDate;
      afterYearDate.setFullYear(afterYearDate.getFullYear() + 1)) {

      splits.push(this.datePipe.transform(afterYearDate, 'yyyy-MM-dd'));

    }

    return splits;

  }


  date(stringDate){
    let date = (new Date(new Date(stringDate)));

    return date;

  }
}
