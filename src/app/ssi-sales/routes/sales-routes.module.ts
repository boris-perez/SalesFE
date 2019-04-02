/**
 * @author boris perez
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SALES_ROUTES_CONFIG} from './sales-routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SALES_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SalesRoutesModule {
}
