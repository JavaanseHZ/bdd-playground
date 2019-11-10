import { Component, OnInit } from '@angular/core';
import { Contract } from '../model/contract'
import { ApiService } from '../service//api.service';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss']
})
export class ContractFormComponent implements OnInit {

  countries = [];

  model = new Contract('',  null, null);

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.calculate();
  }

  constructor(private api: ApiService) {}

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
        alert(data as String);
    });
  }

}
