import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  styleUrls: ['./recipes-detail.component.css'],
  templateUrl: './recipes-detail.component.html',
})
export class RecipesDetailComponent implements OnInit {
  @Input() public recipe: Recipe;
  constructor() {}

  public ngOnInit(): void {}
}
