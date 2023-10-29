import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Pancakes',
      'Tasty!',
      'https://www.allrecipes.com/thmb/Pn6CJYfILCBbnJgkkPfLWh-Aga0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45396-easy-pancakes-mfs-38-34bd7f71161446bfb69609fa46a301e4.jpg',
      [
        new Ingredient('Flour', 1),
        new Ingredient('Milk', 1),
        new Ingredient('Eggs', 2),
        new Ingredient('Syrup', 1),
      ]),

    new Recipe('Waffles',
      'Tasty!',
      'https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/2020_belgian-style-waffles_16700_600x600.jpg?ext=.jpg',
      [
        new Ingredient('Flour', 1),
        new Ingredient('Vanilla Extract', 1),
        new Ingredient('Syrup', 1),
        new Ingredient('Eggs', 3),
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
