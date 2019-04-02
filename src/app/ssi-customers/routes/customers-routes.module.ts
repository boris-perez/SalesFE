/**
 * @author boris perez
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CUSTOMERS_ROUTES_CONFIG} from './customers-routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CUSTOMERS_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CustomersRoutesModule {
}
