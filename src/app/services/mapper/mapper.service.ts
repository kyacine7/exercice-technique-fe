import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor() { }


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

  date(stringDate){
    let date = (new Date(new Date(stringDate)));

    return date;

  }
}
