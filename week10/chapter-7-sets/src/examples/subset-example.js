const MySet = require('../set');

const chickenIngredients = new MySet();
chickenIngredients.addAll(['chicken', 'tomato', 'onion', 'garlic', 'ginger', 'spices']);
const spaghettiIngredients = new MySet();
spaghettiIngredients.addAll(['spaghetti', 'eggs', 'bacon', 'parmesan', 'pepper']);

const recipes = [
  { name: 'Chicken Tikka Masala', ingredients: chickenIngredients },
  { name: 'Spaghetti Carbonara', ingredients: spaghettiIngredients }
];

const userIngredients = new MySet();
userIngredients.addAll(['chicken', 'onion', 'garlic', 'ginger']);

function filterRecipes(recipeList, availableIngredients) {
  const filteredRecipes = [];
  for (const recipe of recipeList) {
    // This mirrors the chapter's subset reasoning: every available ingredient must be in the recipe set.
    if (availableIngredients.isSubsetOf(recipe.ingredients)) {
      filteredRecipes.push({ name: recipe.name });
    }
  }
  return filteredRecipes;
}

console.log('Possible recipes:', filterRecipes(recipes, userIngredients));
