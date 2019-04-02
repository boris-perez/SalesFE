/**
 * @author boris perez
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomersHttpService} from '../../services/customers-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Customers, CustomersDTO} from '../../api/domain/Customers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';


@Component({
  selector: 'customers-create',
  templateUrl: './customers-create.component.html',
  styleUrls: ['./customers-create.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class CustomersCreateComponent implements OnInit, OnDestroy {

  public customersFormGroup: FormGroup;
  public customers: CustomersDTO;
  public submitted: boolean;
  private _customersSubscription: Subscription;


  constructor(private _customersHttpService: CustomersHttpService,
                          private _formBuilder: FormBuilder,
              private _router: Router) {
    this._initForm();

  }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {
    unsubscribe(this._customersSubscription);
  }

  public onSubmit(): void {
    this.submitted = true;

    if (!this.customersFormGroup.valid) {
      return;
    }

    const customersDTO: CustomersDTO = this.customersFormGroup.value;
    this._customersSubscription = this._customersHttpService.doInsert(customersDTO).subscribe(
      (customers: Customers) => {
        this.customers = customers;
        this._router.navigate(['/customers/list']);
      }
    );
  }

  private _initForm(): void {
    this.customersFormGroup = this._formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      address: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required]],
      comment: [null, [Validators.required]]
    });
  }
}
