/**
 * @author boris perez
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES_CONFIG} from './ssi-routes';
import {SsiHomeModule} from '../ssi-home/ssi-home.module';
import {SsiCustomersModule} from '../ssi-customers/ssi-customers.module';
import {SsiMachinesModule} from '../ssi-machine/ssi-machines.module';
import {SsiSalesModule} from '../ssi-sales/ssi-sales.module';

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES_CONFIG),
    SsiHomeModule,
    SsiCustomersModule,
    SsiMachinesModule,
    SsiSalesModule
  ],
  exports: [RouterModule]
})
export class SsiRoutesModule {

}
