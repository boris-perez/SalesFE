/**
 * @author Boris perez
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Machines} from '../../ssi-machine/api/domain/Machines';
import {MachinesHttpService} from '../../ssi-machine/services/machines-http-service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'home-root',
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.scss']
})
export class HomeRootComponent implements OnInit, OnDestroy {

  public machines: Machines[];

  private _machinesSubscription: Subscription;


  constructor(private _machinesHttpService: MachinesHttpService) {
    this.machines = [];
  }

  public ngOnInit() {
    this._initialize();
  }

  public ngOnDestroy() {
  }

  private _initialize(): void {
    this._machinesSubscription = this._machinesHttpService.doFindAll().subscribe(
      (machines: Machines[]) => {
        this.machines = machines;
        console.log(machines);
      }
    );
  }

  public viewCatalogo(machines): void {

  }
}
