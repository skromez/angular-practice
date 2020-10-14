import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cleanfoodcrush.com/wp-content/uploads/2020/06/CleanFoodCrush-Printable-Recipe-Kohlrabi-Fries.jpg'
    ),
    new Recipe(
      'A Another Test Recipe',
      'This is simply a test',
      'https://cleanfoodcrush.com/wp-content/uploads/2020/06/CleanFoodCrush-Printable-Recipe-Kohlrabi-Fries.jpg'
    ),
  ];

  public recipeSelected = new EventEmitter<Recipe>();

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
