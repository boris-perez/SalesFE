/**
 * @author alain quinones
 */
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {FileUpload, FileUploadDTO} from '../api/domain/FileUpload';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class FileHttpService extends BaseHttpService<FileUpload, FileUploadDTO> {

  protected path(): string {
    return '/files';
  }

  public doUpload(file: File, body: FileUploadDTO): Observable<FileUpload> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.post(environment.host + this.path() + '/' + body.referenceId, formData) as Observable<FileUpload>;
  }
}
