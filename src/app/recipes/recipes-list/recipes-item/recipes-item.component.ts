import { Component, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  styleUrls: ['./recipes-item.component.css'],
  templateUrl: './recipes-item.component.html',
})
export class RecipesItemComponent implements OnInit {
  @Input() public recipe: Recipe;

  constructor(private recipeService: RecipesService) {}

  public onRecipeSelect(): void {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  public ngOnInit(): void {}
}
