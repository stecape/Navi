import { Component, OnInit } from '@angular/core';

import { MenuItem } from './menu-item';											//importo la classe MenuItems
import { MENUITEMS } from './mocks';

@Component({
  selector: 'menu',																					//è il nome che uso nel template della app per includere il menu di navigazione.
  templateUrl: './menu.component.html',											//selector: 'menu' -> <menu></menu>
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

	menuItems: MenuItem[];																		//creo un'istanza di menuItems[] che quindi al momento risulta vuoto.
																														//E' un array di oggetti MenuItem, e conterrà gli oggetti MenuItem che 
  constructor() { }																					//definiscono le proprietà delle voci del Menu di navigazione.

  ngOnInit() {
  	this.menuItems= MENUITEMS;															//sull'inizializzazione del component inizializzo l'oggetto menuItems
  }																													//andando a fare riferimento a quanto specificato nel file mocks.ts

}
