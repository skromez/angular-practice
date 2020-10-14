import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  styles: [],
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) {}

  public ngOnInit(): void {
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.ingredients = this.shoppingListService.getShoppingList();
  }
}
