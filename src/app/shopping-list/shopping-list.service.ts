import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Flour', 5),
    new Ingredient('Eggs', 3),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    for (const ingredient of ingredients) {
      const ingExists = this.ingredients.find(
        (ing) => ing.name === ingredient.name
      );
      if (ingExists) {
        ingExists.amount += ingredient.amount;
      } else {
        this.ingredients.push(ingredient);
      }
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
