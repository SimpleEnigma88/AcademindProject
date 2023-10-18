import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeSerice } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  providers: [RecipeSerice]
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private recipeService: RecipeSerice) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
