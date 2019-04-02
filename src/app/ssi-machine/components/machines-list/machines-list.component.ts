/**
 * @author boris perez
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {MachinesHttpService} from '../../services/machines-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Machines} from '../../api/domain/Machines';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MODAL_MACHINES} from '../machines-delete/machines-delete.component';
import {MachinesDeleteService} from '../../services/machines-delete.service';
import {MachinesUpdateService} from '../../services/machines-update.service';
import {Router} from '@angular/router';

@Component({
  selector: 'machines-list',
  templateUrl: './machines-list.component.html',
  styleUrls: ['./machines-list.component.scss']
})
export class MachinesListComponent implements OnInit, OnDestroy {

  public machines: Machines[];

  private _machinesSubscription: Subscription;

  constructor(private _machinesHttpService: MachinesHttpService,
              private _machinesDeleteService: MachinesDeleteService,
              private _machinesUpdateService: MachinesUpdateService,
              private _router: Router,
              private _modalService: NgbModal) {
    this.machines = [];
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._machinesSubscription);
  }

  public onUpdateAction(event: any, machines: Machines): void {
    this._machinesUpdateService.subject.next(machines);
    this._router.navigate(['/machines/update']);
  }

  public onDeleteAction(event: any, machines: Machines): void {
    const modalInstance = this._modalService.open(MODAL_MACHINES.deleteMachines);
    modalInstance.componentInstance.machines = machines;
  }

  private _initialize(): void {
    this._machinesSubscription = this._machinesHttpService.doFindAll().subscribe(
      (machines: Machines[]) => {
        this.machines = machines;
      }
    );

    this._machinesSubscription = this._machinesDeleteService.subject.asObservable().subscribe(
      (machines: Machines) => {
        const index = this.machines.findIndex(value => value.id === machines.id);
        if (index > -1) {
          this.machines.splice(index, 1);
        }
      }
    );
  }
}
