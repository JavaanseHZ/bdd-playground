import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContractFormComponent } from './contract-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [ContractFormComponent],
  exports: [ContractFormComponent],
  bootstrap: [ContractFormComponent]
})
export class ContractFormComponentModule {}