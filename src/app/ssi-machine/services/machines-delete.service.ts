import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Machines} from '../api/domain/Machines';

@Injectable()
export class MachinesDeleteService {

  private _machinesSubject: BehaviorSubject<Machines>;

  constructor() {
    this._machinesSubject = new BehaviorSubject<Machines>(undefined);
  }

  get subject(): Subject<Machines> {
    return this._machinesSubject;
  }

}
