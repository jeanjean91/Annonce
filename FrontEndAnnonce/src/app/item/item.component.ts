import { Component, OnInit } from '@angular/core';
import { Item} from '../item'
import {ItemService} from '../item.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


items: Item[] = [];
constructor(private itemService: ItemService, private router: Router){}

  ngOnInit(): void {
  
  	this.getItem()
  }

  private getItem(){
    this.itemService.getItem().subscribe(data => {
      this.items = data;
    });
  }
   itemDetails(id: number){
    this.router.navigate(['item-detail', id]);
  }

  upda(id: number){
    this.router.navigate(['update', id]);
  }

  deleteItem(id: number){
    this.itemService.deleteitem(id).subscribe( data => {
      console.log(data);
      this.getItem();
    })
  }

}
