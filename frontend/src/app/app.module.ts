import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  {NgbdDatepickerPopupModule } from './contract-form/datepicker-popup.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContractFormComponent } from './contract-form/contract-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContractFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbdDatepickerPopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
