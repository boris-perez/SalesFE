/**
 * @author boris perez
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MachinesRoutesModule} from './routes/machines-routes.module';

import {MachinesHttpService} from './services/machines-http-service';
import {FileHttpService} from './services/file-http-service';
import {MachinesDeleteService} from './services/machines-delete.service';
import {MachinesUpdateService} from './services/machines-update.service';

import {SsiMachinesComponent} from './ssi-machines.component';
import {MachinesRootComponent} from './components/machines-root/machines-root.component';
import {MachinesListComponent} from './components/machines-list/machines-list.component';
import {MachinesCreateComponent} from './components/machines-create/machines-create.component';
import {MachinesDeleteComponent} from './components/machines-delete/machines-delete.component';
import {MachinesUpdateComponent} from './components/machines-update/machines-update.component';
import {MachinesCreateService} from './services/machines-create.service';


@NgModule({
  declarations: [
    SsiMachinesComponent,
    MachinesRootComponent,
    MachinesListComponent,
    MachinesCreateComponent,
    MachinesDeleteComponent,
    MachinesUpdateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MachinesRoutesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    SsiMachinesComponent,
    MachinesRootComponent,
    MachinesListComponent,
    MachinesCreateComponent,
    MachinesDeleteComponent,
    MachinesUpdateComponent
  ],
  providers: [
    MachinesHttpService,
    FileHttpService,
    MachinesDeleteService,
    MachinesUpdateService,
    MachinesCreateService
  ],
  entryComponents: [
    MachinesDeleteComponent
  ]
})
export class SsiMachinesModule {
}
