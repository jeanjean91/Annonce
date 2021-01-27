import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item} from '../item'
import {ItemService} from '../item.service'
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

	id: number
  item: Item

  constructor(private route: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit(): void {
  	this.id = this.route.snapshot.params['id'];

    this.item = new Item();
    this.itemService.getItemById(this.id).subscribe( data => {
      this.item = data;
    });
  }

}
