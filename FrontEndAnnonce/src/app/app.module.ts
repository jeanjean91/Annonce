import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { UpdateComponent } from './update/update.component';
/*import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';
*/
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    AddItemComponent,
    ItemDetailComponent,
    UpdateComponent,
   /* UploadFilesComponent,
    UploadImagesComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
