import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {


  private satisticsUrl: string = "/api/statistics";
  private minMaxDatesURL: string = "/api/minMaxDates";
  private OneYearChartUrl: string = "/api/yearData"
  private onChoosenRangeURL: string = "/api/onChoosenRange"

  private startBatchUrl: string = "/api/loadData"

  constructor(private httpClient: HttpClient) { }

  getStatistics() {
    console.log(this.satisticsUrl)

    return this.httpClient.get(this.satisticsUrl);
  }

  getMinMaxDates(){
    console.log(this.minMaxDatesURL)

    return this.httpClient.get(this.minMaxDatesURL)
  }

  getYearDataOnChoosenRange(origine_name,startDate) {
    console.log(this.OneYearChartUrl+"/"+origine_name+"/"+startDate)

      return this.httpClient.get(this.OneYearChartUrl+"/"+origine_name+"/"+startDate);
  }
  getOnChoosenRange(origine_name, startDate, endDate) {
    console.log(this.onChoosenRangeURL+"/"+origine_name+"/"+startDate+"/"+endDate)
    
    return this.httpClient.get(this.onChoosenRangeURL+"/"+origine_name+"/"+startDate+"/"+endDate);
  }

  // Abouve Validated

  getStartBatch(){
    return this.httpClient.get(this.startBatchUrl);
  }



}
