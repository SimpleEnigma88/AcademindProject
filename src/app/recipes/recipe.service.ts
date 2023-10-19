import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pancakes', 'Tasty!', 'https://www.allrecipes.com/thmb/Pn6CJYfILCBbnJgkkPfLWh-Aga0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45396-easy-pancakes-mfs-38-34bd7f71161446bfb69609fa46a301e4.jpg'),
    new Recipe('Waffles', 'Tasty!', 'https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/2020_belgian-style-waffles_16700_600x600.jpg?ext=.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
