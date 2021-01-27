import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item} from '../item'
import {ItemService} from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


 item: Item
  constructor(private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  	this.id = this.route.snapshot.params['id'];

    this.itemService.getItemById(this.id).subscribe(data => {
      this.item = data;
    }, error => console.log(error));
  }
   onSubmit(){
    this.itemService.updateItem(this.id, this.item).subscribe( data =>{
      this.goToItemList();
    }
    , error => console.log(error));
  }

  goToItemList(){
    this.router.navigate(['/Items']);
  }
}


