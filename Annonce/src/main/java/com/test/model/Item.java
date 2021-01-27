package com.test.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "item")
public class Item {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "profilImage")
	private String profilImage;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "prix")
	private BigDecimal prix;
	
	
	public Item() {
			
		}
	
	
	public Item(String name, String profilImage, String description, BigDecimal prix) {
		super();
		
		this.name = name;
		this.profilImage = profilImage;
		this.description = description;
		this.prix = prix;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getProfilImage() {
		return profilImage;
	}
	public void setProfilImage(String profilImage) {
		this.profilImage = profilImage;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public BigDecimal getPrix() {
		return prix;
	}
	public void setPrix(BigDecimal string) {
		this.prix = string;
	}
	

}
