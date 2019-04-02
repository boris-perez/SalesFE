/**
 * @author boris perez
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {SalesHttpService} from '../../services/sales-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Sales} from '../../api/domain/Sales';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit, OnDestroy {

  public sales: Sales[];

  private _salesSubscription: Subscription;

  constructor(private _salesHttpService: SalesHttpService,
              private _router: Router,
              private _modalService: NgbModal) {
    this.sales = [];
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._salesSubscription);
  }

  private _initialize(): void {
    this._salesSubscription = this._salesHttpService.doFindAll().subscribe(
      (sales: Sales[]) => {
        this.sales = sales;
        console.log(this.sales);
      }
    );
  }
}
