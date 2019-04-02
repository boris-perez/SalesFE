/**
 * @author boris perez
 *
 * */

import {Routes} from '@angular/router';
import {CustomersRootComponent} from '../components/customers-root/customers-root.component';
import {CustomersListComponent} from '../components/customers-list/customers-list.component';
import {CustomersCreateComponent} from '../components/customers-create/customers-create.component';


export const CUSTOMERS_ROUTES_CONFIG: Routes = [
  {
    path: 'customers',
    component: CustomersRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'list', component: CustomersListComponent},
          {path: 'create', component: CustomersCreateComponent}
        ]
      },
      {path: '**', redirectTo: 'list'}
    ]
  }
];
