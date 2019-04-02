/**
 * @author boris perez
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MACHINES_ROUTES_CONFIG} from './machines-routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MACHINES_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class MachinesRoutesModule {
}
