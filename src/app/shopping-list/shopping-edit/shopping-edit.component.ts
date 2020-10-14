import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styles: [],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) public nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) public amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) {}
  public onAddItem(): void {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.slService.addIngredient(newIngredient);
  }

  public ngOnInit(): void {}
}
