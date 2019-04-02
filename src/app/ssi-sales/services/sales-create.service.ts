import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Sales} from '../api/domain/Sales';

@Injectable()
export class SalesCreateService {

  private _salesSubject: BehaviorSubject<Sales>;

  constructor() {
    this._salesSubject = new BehaviorSubject<Sales>(undefined);
  }

  get subject(): Subject<Sales> {
    return this._salesSubject;
  }

}
