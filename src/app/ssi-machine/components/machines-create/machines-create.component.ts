/**
 * @author boris perez
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {MachinesHttpService} from '../../services/machines-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Machines, MachinesDTO} from '../../api/domain/Machines';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MachineCapacity} from '../../api/enum/MachineCapacity';
import {NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {FileHttpService} from '../../services/file-http-service';
import {FileUpload, FileUploadDTO} from '../../api/domain/FileUpload';
import {MachinesCreateService} from '../../services/machines-create.service';

@Component({
  selector: 'machines-create',
  templateUrl: './machines-create.component.html',
  styleUrls: ['./machines-create.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class MachinesCreateComponent implements OnInit, OnDestroy {

  public machinesFormGroup: FormGroup;
  public machines: Machines;
  public submitted: boolean;
  public machinesCapacity: string[];
  public image: string;
  private _machinesSubscription: Subscription;
  private _file: File;

  constructor(private _machinesHttpService: MachinesHttpService,
              private _formBuilder: FormBuilder,
              private _fileHttpService: FileHttpService,
              private _machinesCreateService: MachinesCreateService,
              private _router: Router) {
    this._initForm();

    this.machinesCapacity = Object.keys(MachineCapacity);
  }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {
    unsubscribe(this._machinesSubscription);
  }

  public onSubmit(): void {
    this.submitted = true;

    if (!this.machinesFormGroup.valid) {
      return;
    }

    const machinesDTO: MachinesDTO = this.machinesFormGroup.value;
    this._machinesSubscription = this._machinesHttpService.doInsert(machinesDTO).subscribe(
      (machines: Machines) => {
        this.machines = machines;
        this._machinesCreateService.subject.next(machines);
        if(this._file){
          this._uploadFile(machines.id).then(
            (file: FileUpload) => {
              this._navigateToList();
            }
          );
        }else{
          this._navigateToList();
        }
      }
    );
  }

  public onFileChange(event: any): void {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this._file = event.target.files[0];
      reader.readAsDataURL(this._file);

      reader.onload = () => {
        this.image = reader.result;
      };
    }
  }

  private _uploadFile(referenceId: string): Promise<FileUpload> {
    return new Promise<FileUpload>(
      (resolve, reject) => {
        this._fileHttpService.doUpload(this._file, new FileUploadDTO(referenceId)).subscribe(
          (file: FileUpload) => {
            resolve(file);
          }
        );
      }
    );
  }


  private _initForm(): void {
    this.machinesFormGroup = this._formBuilder.group({
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]],
      mark: [null, [Validators.required]],
      model: [null, [Validators.required]],
      capacity: [null, [Validators.required]]
    });
  }
  private _navigateToList(): void {
    this._router.navigate(['/machines/list']);
  }
}
