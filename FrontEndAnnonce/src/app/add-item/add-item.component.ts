import { Component, OnInit } from '@angular/core';
import { Item} from '../item'
import {ItemService} from '../item.service'
import { Router } from '@angular/router';
/*import {ImageUploadComponent} from '../image-upload/image-upload.component';*/

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {


	item: Item = new Item();
  constructor(private itemService: ItemService, 
  	private router: Router ) { }

  ngOnInit(): void {
  }

  saveItem(){
    this.itemService.createItem(this.item).subscribe( data =>{
      console.log(data);
      this.goToItem();
    },
    error => console.log(error));
  }

  goToItem(){
    this.router.navigate(['/Items']);
  }
  
  onSubmit(){
  	
    console.log(this.item);
    
    this.saveItem();
  }

}


 
