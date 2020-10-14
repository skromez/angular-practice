import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  styleUrls: ['./recipes-list.component.css'],
  templateUrl: './recipes-list.component.html',
})
export class RecipesListComponent implements OnInit {
  public recipes: Recipe[];

  constructor(private recipeService: RecipesService) {}

  public ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
