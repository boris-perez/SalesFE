/**
 * @author Boris perez
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Machines} from '../../ssi-machine/api/domain/Machines';
import {MachinesHttpService} from '../../ssi-machine/services/machines-http-service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'home-root',
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.scss']
})
export class HomeRootComponent {
}
