import { Component, OnInit } from '@angular/core';
import {UploadService} from '../service/upload.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  showFile = false;
  uploadFiles;

  constructor(private service: UploadService) { }

  ngOnInit() {
  }

showFiles(enable: boolean) {
  this.showFile = enable;
  if (this.showFile) {
    this.service.getAllFiles().subscribe(data => {
      this.uploadFiles = data;
      console.log(data);
    });
  }
}

}
