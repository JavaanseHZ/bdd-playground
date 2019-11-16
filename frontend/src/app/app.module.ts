import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbDateCustomParserFormatter } from './model/NgbDateCustomParserFormatter'

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
    FormsModule,
    HttpClientModule
  ],
  providers: [
      {
        provide: NgbDateParserFormatter,
        useClass: NgbDateCustomParserFormatter
      },
      {
        provide: LOCALE_ID,
        useValue: 'de'
      }
    ],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
