/**
 * @author boris perez
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {SalesRoutesModule} from './routes/sales-routes.module';

import {CustomersHttpService} from './services/customers-http-service';
import {MachinesHttpService} from './services/machines-http-service';


import {SsiSalesComponent} from './ssi-sales.component';
import {SalesRootComponent} from './components/sales-root/sales-root.component';
import {SalesListComponent} from './components/sales-list/sales-list.component';
import {SalesCreateComponent} from './components/sales-create/sales-create.component';
import {SalesHttpService} from './services/sales-http-service';
import {SalesCreateService} from './services/sales-create.service';

@NgModule({
  declarations: [
    SsiSalesComponent,
    SalesRootComponent,
    SalesListComponent,
    SalesCreateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SalesRoutesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    SsiSalesComponent,
    SalesRootComponent,
    SalesListComponent,
    SalesCreateComponent
  ],
  providers: [
    SalesHttpService,
    CustomersHttpService,
    MachinesHttpService,
    SalesCreateService
  ],
  entryComponents: [
  ]
})
export class SsiSalesModule {
}
