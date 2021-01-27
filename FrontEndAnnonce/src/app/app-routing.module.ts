import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemComponent} from './item/item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { UpdateComponent } from './update/update.component';



const routes: Routes = [
		{path: 'Items', component: ItemComponent},
		{path: 'add-item', component: AddItemComponent},
		{path: 'update/:id', component: UpdateComponent},
		{path: 'item-detail/:id', component: ItemDetailComponent},
		{path: '', redirectTo: 'Items', pathMatch:'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
