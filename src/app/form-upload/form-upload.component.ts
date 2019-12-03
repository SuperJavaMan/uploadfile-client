import { Component, OnInit } from '@angular/core';
import {UploadService} from '../service/upload.service';
import {PersonDTO} from '../model/PersonDTO';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(private upService: UploadService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload(data) {
    this.currentFileUpload = this.selectedFiles.item(0);
    const person: PersonDTO = new PersonDTO(data.username, this.currentFileUpload);
    console.log(person.file.name);
    this.upService.saveData(person).subscribe();
    this.selectedFiles = undefined;
  }
}
