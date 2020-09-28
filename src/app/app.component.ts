import { Component } from '@angular/core';
import { PersistenceService } from './services/persistence/persistence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercice-technique-fe';

  constructor(private serviceAPI : PersistenceService){}

  loadingStatus = 'UNKNOWN';

  loadingProgress = 0

  startLoadDataProcess() {
      
      this.serviceAPI.getStartBatch().subscribe(elements => {
        this.loadingProgress = elements[0];
        // this.loadingStatus = elements[1];
      });      
  }


}
