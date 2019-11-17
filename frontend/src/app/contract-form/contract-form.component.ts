import { Component, OnInit } from '@angular/core';
import { Contract } from '../model/contract'
import { ApiService } from '../service/api.service';
import { NgbDatepickerConfig, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss'],
  providers: [NgbDatepickerConfig]
})
export class ContractFormComponent implements OnInit {

  countries = [];

  model : Contract = new Contract();

  dateModel : NgbDateStruct;

  premium : Number;

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.calculate();
  }

  constructor(private api: ApiService, config: NgbDatepickerConfig, calendar: NgbCalendar) {
    var calMin = calendar.getToday();
    calMin.year = calMin.year - 65;
    config.minDate = calMin;
    var calMax = calendar.getToday();
    calMax.year = calMax.year - 18;
    config.maxDate = calMax;
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
        this.premium = data as Number;
    });
  }

}
