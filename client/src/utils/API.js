require('dotenv').config();

// search thecocktaildb by drinkId
export const searchByID = (query) => {
  return fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${query}`);
};

// search by ingredient
export const searchByIngredient = (query) => {
  return fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`);
};

// random cocktail
export const cocktailRandom = async () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.COCKTAILDB_KEY}/random.php`);
};

// ten random cocktails
export const cocktailParty = () => {
  return fetch(`www.thecocktaildb.com/api/json/v2/${process.env.COCKTAILDB_KEY}/randomselection.php`);
}

// 
export const cocktailPopular = () => {
  return fetch(`www.thecocktaildb.com/api/json/v2/${process.env.COCKTAILDB_KEY}/popular.php`);
}