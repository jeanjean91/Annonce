package com.test.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.test.exception.RessourceNotfoundException;
import com.test.model.Item;
import com.test.repository.ItemRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/")
public class ItemController {
	
	@Autowired
	private ItemRepository itemRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/items")
	public List<Item> getAllItems(){
		return itemRepository.findAll();
		
	}
	
	
		
		@PostMapping("/items")
		public Item addItem(@RequestBody Item item) {
			return itemRepository.save(item);
		}
		
		
		@GetMapping("/items/{id}")
		public ResponseEntity<Item> getItemById(@PathVariable Long id) {
			Item item = itemRepository.findById(id)
					.orElseThrow(() -> new RessourceNotfoundException("Item not exist with id :" + id));
			return ResponseEntity.ok(item);
		}
		
		// update item rest api
		
		@PutMapping("/items/{id}")
		public ResponseEntity<Item> updateItem(@PathVariable Long id, @RequestBody Item itemDetails){
			Item item = itemRepository.findById(id)
					.orElseThrow(() -> new RessourceNotfoundException("Item not exist with id :" + id));
			
			item.setName(itemDetails.getName());
			item.setDescription(itemDetails.getDescription());
			item.setPrix(itemDetails.getPrix());
			item.setProfilImage(itemDetails.getProfilImage());
			
			Item updatedItem = itemRepository.save(item);
			return ResponseEntity.ok(updatedItem);
		}
		
		// delete Item rest api
		@DeleteMapping("/items/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteItem(@PathVariable Long id){
			Item item = itemRepository.findById(id)
					.orElseThrow(() -> new RessourceNotfoundException("Item not exist with id :" + id));
			
			itemRepository.delete(item);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
		@GetMapping("/items/published")
		  public ResponseEntity<List<Item>> findByPublished() {
			return null;
		    
		  }

		
}
