/**
 * @author boris perez
 */
import {Routes} from '@angular/router';
import {SsiHomeComponent} from '../ssi-home/ssi-home.component';
import {SsiSalesComponent} from '../ssi-sales/ssi-sales.component';
import {SsiCustomersComponent} from '../ssi-customers/ssi-customers.component';
import {SsiMachinesComponent} from '../ssi-machine/ssi-machines.component';

export const ROUTES_CONFIG: Routes = [
  {path: 'home', component: SsiHomeComponent},
  {path: 'sales', component: SsiSalesComponent},
  {path: 'customers', component: SsiCustomersComponent},
  {path: 'machines', component: SsiMachinesComponent},
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
