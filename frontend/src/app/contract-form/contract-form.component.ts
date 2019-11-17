import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Contract } from '../model/contract'
import { ApiService } from '../service/api.service';
import { NgbDatepickerConfig, NgbCalendar, NgbDateStruct, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ValidationError } from '../model/validationerror';

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

  ttnameContentModel : String;
  ttcalendarContentModel : String;
  ttcountryContentModel : String;

  @ViewChild('ttname', {static: false}) nameTooltip: NgbTooltip;
  @ViewChild('ttcalendar', {static: false}) calendarTooltip: NgbTooltip;
  @ViewChild('ttcountry', {static: false}) countryTooltip: NgbTooltip;

  onSubmit() {
    this.nameTooltip.close();
    this.countryTooltip.close();
    this.calendarTooltip.close();
    this.submitted = true;
    this.calculate();
  }

  constructor(private api: ApiService,
      config: NgbDatepickerConfig,
      calendar: NgbCalendar,
      private ref : ChangeDetectorRef) {
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
        this.countries.push('');
        console.log(this.countries);
      });
  }

  calculate() {
    this.api.caculateContract(this.model).subscribe(
    data => {
        console.log(data);      
        this.premium = data as Number;
    },
    errors => {
      for (let i = 0; i < errors.length; i++) {
        const validationError = errors[i] as ValidationError;
        switch (validationError.field) {
          case 'name':
            this.ttnameContentModel = validationError.message;
            this.ref.detectChanges();
            this.nameTooltip.open();
            break;
          case 'dateOfBirth':
            this.ttcalendarContentModel = validationError.message;
            this.ref.detectChanges();
            this.calendarTooltip.open();
            break;
          case 'country':
            this.ttcountryContentModel = validationError.message;
            this.ref.detectChanges();
            this.countryTooltip.open();
            break;
          default:
            break;
        }
      }
    });
  }

  clear(): void {
    this.model.dateOfBirth = undefined;
  }

  modelChanged(val) {
    this.premium = undefined;
  }


}
