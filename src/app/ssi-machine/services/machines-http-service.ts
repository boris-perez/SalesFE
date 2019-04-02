/**
 * @author boris perez
 */
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Machines, MachinesDTO} from '../api/domain/Machines';

@Injectable()
export class MachinesHttpService extends BaseHttpService<Machines, MachinesDTO> {

  protected path(): string {
    return '/machines';
  }
}
