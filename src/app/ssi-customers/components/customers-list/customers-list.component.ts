/**
 * @author boris perez
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomersHttpService} from '../../services/customers-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Customers} from '../../api/domain/Customers';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit, OnDestroy {

  public customers: Customers[];

  private _customersSubscription: Subscription;

  constructor(private _customersHttpService: CustomersHttpService,
              private _router: Router,
              private _modalService: NgbModal) {
    this.customers = [];
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._customersSubscription);
  }

  private _initialize(): void {
    this._customersSubscription = this._customersHttpService.doFindAll().subscribe(
      (customers: Customers[]) => {
        this.customers = customers;
      }
    );
  }
}
