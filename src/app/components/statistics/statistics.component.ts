import { Component, OnInit } from '@angular/core';
import { PersistenceService } from 'src/app/services/persistence/persistence.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  private statistics;
  private statisticsTable: Object[];

  constructor(private service: PersistenceService) { }

  ngOnInit() {
    this.getStatistics();
  }

  getStatistics() {
    this.service.getStatistics().subscribe(statistics =>{
      this.statisticsTable = statistics as Object[];
    });

  }
}
