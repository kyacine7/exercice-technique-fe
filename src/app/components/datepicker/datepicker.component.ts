import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  minPeriodeDate: NgbDateStruct;
  maxPeriodeDate: NgbDateStruct;

  constructor() { }

  ngOnInit() {

    
  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  pickedPeriod(){
    
    console.log(this.range);
  }

}
