/**
 * @author boris perez
 */

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MachinesHttpService} from '../../services/machines-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Machines} from '../../api/domain/Machines';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MachinesDeleteService} from '../../services/machines-delete.service';

@Component({
  selector: 'machines-delete',
  templateUrl: './machines-delete.component.html',
  styleUrls: ['./machines-delete.component.scss']
})
export class MachinesDeleteComponent implements OnInit, OnDestroy {
  @Input() public machines: Machines;

  private _machinesSubscription: Subscription;

  constructor(private _machinesHttpService: MachinesHttpService,
              private _machinesDeleteService: MachinesDeleteService,
              public modal: NgbActiveModal) {
  }

  public ngOnInit(): void {
    if (!this.machines) {
      this.machines = new Machines();
    }
  }

  public ngOnDestroy(): void {
    unsubscribe(this._machinesSubscription);
  }

  public delete(): void {
    this._machinesSubscription = this._machinesHttpService.doDelete(this.machines.id).subscribe(
      (machines: Machines) => {
        this._machinesDeleteService.subject.next(machines);
        this.modal.close('Ok click');
      }
    );
  }
}

export const MODAL_MACHINES = {
  deleteMachines: MachinesDeleteComponent
};
