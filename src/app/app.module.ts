import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { DetailsUploadComponent } from './details-upload/details-upload.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UploadFilesComponent,
    DetailsUploadComponent,
    FormUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
