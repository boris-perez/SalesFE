/**
 * @author boris perez
 */
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Sales, SalesDTO} from '../api/domain/Sales';

@Injectable()
export class SalesHttpService extends BaseHttpService<Sales, SalesDTO> {

  protected path(): string {
    return '/sales';
  }
}
