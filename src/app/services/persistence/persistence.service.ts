import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {


  private satisticsUrl: string = "/api/statistics";
  private minMaxDatesURL: string = "/api/minMaxDates";
  private onInitChartURL: string = "/api/yearDataOnChoosenDate"
  private onChoosenRangeURL: string = "/api/onChoosenRange"


  private OneYearChartUrl: string = "/api/oneYearChart";
  private allYearUrl: string = "/api/allYears";
  private startBatchUrl: string = "/api/loadData"

  constructor(private httpClient: HttpClient) { }

  getStatistics() {
    return this.httpClient.get(this.satisticsUrl);
  }

  getMinMaxDates(){
    return this.httpClient.get(this.minMaxDatesURL)
  }

  getYearDataOnChoosenDate(minDate) {

      return this.httpClient.get(this.onInitChartURL+"/"+minDate);

  }

  // Abouve Validated

  getOneYearChart(firstDayOfYear: string) {
    return this.httpClient.get(this.OneYearChartUrl+"/"+firstDayOfYear);
  }

  getAllYear() {
    return this.httpClient.get(this.allYearUrl);
  }

  getStartBatch(){
    return this.httpClient.get(this.startBatchUrl);
  }

  getOnChoosenRange(startDate: any, endDate: any) {
    return this.httpClient.get(this.onChoosenRangeURL+"/"+startDate+"/"+endDate);
  }

}
