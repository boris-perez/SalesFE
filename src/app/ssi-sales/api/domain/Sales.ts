import {Customers} from './Customers';
import {Machines} from './Machines';

export class Sales {
  id: string;
  code: string;
  customer: Customers;
  machine: Machines;
}

export class SalesDTO {

  constructor(code: string,
              customerId: string,
              machineId: string) {
    this.code = code;
    this.customerId = customerId;
    this.machineId = machineId;
  }
  id: string;
  code: string;
  customerId: string;
  machineId: string;
}
