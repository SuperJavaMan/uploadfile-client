import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PersonDTO} from '../model/PersonDTO';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private URL = 'http://localhost:8080/files/';

  constructor(private client: HttpClient) { }

  saveData(person: PersonDTO) {
    const formData: FormData = new FormData();
    formData.append('id', String(person.id));
    formData.append('name', person.name);
    formData.append('file', person.file);
    return this.client.post(this.URL + 'employee', formData, {
       reportProgress: true
     });
  }
  getAllFiles() {
    return this.client.get(this.URL + '/person');
  }
}


