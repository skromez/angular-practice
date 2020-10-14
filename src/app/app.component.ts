import { Component } from '@angular/core';
import { RecipesService } from './recipes/recipes.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  providers: [ShoppingListService, RecipesService],
})
export class AppComponent {
  public loadedFeature = 'recipe';
  public onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
