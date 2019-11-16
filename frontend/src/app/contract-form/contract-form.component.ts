import { Component, OnInit } from '@angular/core';
import { Contract } from '../model/contract'
import { ApiService } from '../service/api.service';
import {NgbDatepickerConfig, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss'],
  providers: [NgbDatepickerConfig]
})
export class ContractFormComponent implements OnInit {

  countries = [];

  model : Contract; // = new Contract('',  {year: 1980, month: 1, day: 1}, null);

  premium = '';

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.calculate();
  }

  constructor(private api: ApiService,config: NgbDatepickerConfig, calendar: NgbCalendar) {
    config.minDate = {year: 1900, month: 1, day: 1};
    //config.startDate = {year: 1980, month: 1};
    config.maxDate = calendar.getToday();
    config.outsideDays = 'hidden';
  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.api.getCountries()
      .subscribe(data => {
        for (const d of (data as any)) {
          this.countries.push(d.name);
        }
        console.log(this.countries);
      });
  }

  calculate() {
    this.api.calculate(this.model).subscribe(data => {
        this.premium = data as string;
    });
  }

}
