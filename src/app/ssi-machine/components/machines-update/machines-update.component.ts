/**
 * @author boris perez
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {MachinesHttpService} from '../../services/machines-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Machines, MachinesDTO} from '../../api/domain/Machines';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MachineCapacity} from '../../api/enum/MachineCapacity';
import {NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {MachinesUpdateService} from '../../services/machines-update.service';
import {FileHttpService} from '../../services/file-http-service';

@Component({
  selector: 'machines-update',
  templateUrl: './machines-update.component.html',
  styleUrls: ['./machines-update.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class MachinesUpdateComponent implements OnInit, OnDestroy {

  public machinesFormGroup: FormGroup;
  public machines: Machines;
  public submitted: boolean;
  public machinesCapacity: string[];
  private _machinesSubscription: Subscription;
  private _machinesUpdateSubscription: Subscription;

  constructor(private _machinesHttpService: MachinesHttpService,
              private _formBuilder: FormBuilder,
              private _fileHttpService: FileHttpService,
              private _machinesUpdateService: MachinesUpdateService,
              private _router: Router) {
    this._initForm();

    this.machinesCapacity = Object.keys(MachineCapacity);
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._machinesSubscription);
    unsubscribe(this._machinesUpdateSubscription);
  }

  public onSubmit(): void {
    this.submitted = true;

    if (!this.machinesFormGroup.valid) {
      return;
    }

    const machinesDTO: MachinesDTO = this.machinesFormGroup.value;
    this._machinesSubscription = this._machinesHttpService.doInsert(machinesDTO).subscribe(
      (machines: Machines) => {
        this.machines = machines;
        this._router.navigate(['/machines/list']);
      }
    );
  }

  private _initForm(): void {
    this.machinesFormGroup = this._formBuilder.group({
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]],
      mark: [null, [Validators.required]],
      model: [null, [Validators.required]],
      capacity: [null, [Validators.required]]
    });
  }

  private _initialize(): void {

    this._machinesUpdateSubscription = this._machinesUpdateService.subject.asObservable().subscribe(
      (machines: Machines) => {
        if (machines) {
          this.machines = machines;
          const machinesDTO = new MachinesDTO(
            machines.id,
            machines.name,
            machines.price,
            machines.description,
            machines.mark,
            machines.model,
            machines.capacity
             );
          this.machinesFormGroup.patchValue(machinesDTO);
        } else {
          this._router.navigate(['machines/list']);
        }
      }
    );
  }

}
