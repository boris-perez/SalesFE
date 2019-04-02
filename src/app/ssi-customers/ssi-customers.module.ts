/**
 * @author boris perez
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {CustomersRoutesModule} from './routes/customers-routes.module';

import {CustomersHttpService} from './services/customers-http-service';

import {SsiCustomersComponent} from './ssi-customers.component';
import {CustomersRootComponent} from './components/customers-root/customers-root.component';
import {CustomersListComponent} from './components/customers-list/customers-list.component';
import {CustomersCreateComponent} from './components/customers-create/customers-create.component';

@NgModule({
  declarations: [
    SsiCustomersComponent,
    CustomersRootComponent,
    CustomersListComponent,
    CustomersCreateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CustomersRoutesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    SsiCustomersComponent,
    CustomersRootComponent,
    CustomersListComponent,
    CustomersCreateComponent
  ],
  providers: [
    CustomersHttpService,
  ],
  entryComponents: [

  ]
})
export class SsiCustomersModule {
}
