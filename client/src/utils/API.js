// search thecocktaildb by drinkId
export const searchByID = (query) => {
  return fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${query}`);
};

// search by ingredient
export const searchByIngredient = (query) => {
  return fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`);
};

// random cocktail
export const randomCocktail = () => {
  return fetch(`www.thecocktaildb.com/api/json/v1/1/random.php`);
};