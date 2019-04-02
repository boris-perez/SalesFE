/**
 * @author boris perez
 *
 * */

import {Routes} from '@angular/router';
import {SalesRootComponent} from '../components/sales-root/sales-root.component';
import {SalesListComponent} from '../components/sales-list/sales-list.component';
import {SalesCreateComponent} from '../components/sales-create/sales-create.component';


export const SALES_ROUTES_CONFIG: Routes = [
  {
    path: 'sales',
    component: SalesRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'list', component: SalesListComponent},
          {path: 'create', component: SalesCreateComponent}
        ]
      },
      {path: '**', redirectTo: 'list'}
    ]
  }
];
