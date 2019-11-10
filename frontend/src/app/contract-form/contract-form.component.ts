import { Component, OnInit } from '@angular/core';
import { Contract } from '../model/contract'
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss']
})
export class ContractFormComponent implements OnInit {

  countries = ['Deutschland', 'Frankreich'];

  model = new Contract('',  null, null);

  submitted = false;

  onSubmit() {
    this.submitted = true;
    alert(JSON.stringify(this.model))
  }

  constructor() { }

  ngOnInit() {
  }

}
