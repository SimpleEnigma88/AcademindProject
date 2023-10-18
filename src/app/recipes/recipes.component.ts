import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeSerice } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeSerice]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {

  }
}
