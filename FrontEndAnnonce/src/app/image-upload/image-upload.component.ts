/*import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from 'image-upload/image-uploade.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {



  selectedFiles: FileList;
  progressInfos = [];
  message = '';

  fileInfos: Observable<any>;

  constructor(private imageUploadService: ImageUploadService) { }

  selectFiles(event) {
  this.progressInfos = [];

  const files = event.target.files;
  let isImage = true;

  for (let i = 0; i < files.length; i++) {
    if (files.item(i).type.match('image.*')) {
      continue;
    } else {
      isImage = false;
      alert('invalid format!');
      break;
    }
  }

  if (isImage) {
    this.selectedFiles = event.target.files;
  } else {
    this.selectedFiles = undefined;
    event.srcElement.percentage = null;
  }
}

uploadFiles() {
  this.message = '';

  for (let i = 0; i < this.selectedFiles.length; i++) {
    this.upload(i, this.selectedFiles[i]);
  }
}
upload(idx, file) {
  this.progressInfos[idx] = { value: 0, fileName: file.name };

  this.imageUploadService.upload(file).subscribe(
    event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.fileInfos = this.imageUploadService.getFiles();
      }
    },
    err => {
      this.progressInfos[idx].percentage = 0;
      this.message = 'Could not upload the file:' + file.name;
    });
}

  ngOnInit(): void {
  }
  this.fileInfos = this.imageUploadService.getFiles();

}
*/