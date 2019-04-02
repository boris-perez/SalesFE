/**
 * @author boris perez
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomersHttpService} from '../../services/customers-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Sales, SalesDTO} from '../../api/domain/Sales';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MachinesHttpService} from '../../services/machines-http-service';
import {Machines} from '../../api/domain/Machines';
import {NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {SalesHttpService} from '../../services/sales-http-service';
import {Customers} from '../../api/domain/Customers';
import {SalesCreateService} from "../../services/sales-create.service";

@Component({
  selector: 'sales-create',
  templateUrl: './sales-create.component.html',
  styleUrls: ['./sales-create.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class SalesCreateComponent implements OnInit, OnDestroy {

  public salesFormGroup: FormGroup;
  public sales: Sales;
  public submitted: boolean;
  public machines: Machines[];
  public customers: Customers[];

  private _customersSubscription: Subscription;
  private _machinesSubscription: Subscription;
  private _salesSubscription: Subscription;

  constructor(private _customersHttpService: CustomersHttpService,
              private _machinesHttpService: MachinesHttpService,
              private _salesHttpService: SalesHttpService,
              private _salesCreateService: SalesCreateService,
              private _formBuilder: FormBuilder,
              private _router: Router) {
    this._initForm();

  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._salesSubscription);
    unsubscribe(this._machinesSubscription);
    unsubscribe(this._customersSubscription);
  }

  public onSubmit(): void {
    this.submitted = true;

    if (!this.salesFormGroup.valid) {
      return;
    }

    const salesDTO: SalesDTO = this.salesFormGroup.value;
    console.log('el dto!!!: ', salesDTO);
    this._salesSubscription = this._salesHttpService.doInsert(salesDTO).subscribe(
      (sales: Sales) => {
        this.sales = sales;
        this._salesCreateService.subject.next(sales);
        this._router.navigate(['/sales/list']);
      }
    );
  }

  private _initForm(): void {
    this.salesFormGroup = this._formBuilder.group({
      code: [null, [Validators.required]],
      customerId: [null, [Validators.required]],
      machineId: [null, [Validators.required]],
    });
  }

  private _initialize(): void {
    this._customersSubscription = this._customersHttpService.doFindAll().subscribe(
      (customers: Customers[]) => {
        this.customers = customers;
      }
    );
    this._machinesSubscription = this._machinesHttpService.doFindAll().subscribe(
      (machines: Machines[]) => {
        this.machines = machines;
      }
    );
  }
}
