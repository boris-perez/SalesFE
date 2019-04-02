/**
 * @author boris perez
 */
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Customers, CustomersDTO} from '../api/domain/Customers';

@Injectable()
export class CustomersHttpService extends BaseHttpService<Customers, CustomersDTO> {

  protected path(): string {
    return '/customer';
  }
}
