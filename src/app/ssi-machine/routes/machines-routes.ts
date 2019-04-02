/**
 * @author Boris perez
 */

import {Routes} from '@angular/router';
import {MachinesRootComponent} from '../components/machines-root/machines-root.component';
import {MachinesListComponent} from '../components/machines-list/machines-list.component';
import {MachinesCreateComponent} from '../components/machines-create/machines-create.component';
import {MachinesUpdateComponent} from '../components/machines-update/machines-update.component';


export const MACHINES_ROUTES_CONFIG: Routes = [
  {
    path: 'machines',
    component: MachinesRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'list', component: MachinesListComponent},
          {path: 'create', component: MachinesCreateComponent},
          {path: 'update', component: MachinesUpdateComponent}
        ]
      },
      {path: '**', redirectTo: 'list'}
    ]
  }
];
