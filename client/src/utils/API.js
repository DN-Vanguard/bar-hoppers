require('dotenv').config();

// search thecocktaildb by drinkId
export const searchByID = (query) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB_KEY}/lookup.php?i=${query}`);
};

// search thecocktaildb by drinkId
export const searchByName = (query) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB_KEY}/search.php?s=${query}`);
};


// search by ingredient
export const searchByIngredient = (query) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB_KEY}/filter.php?i=${query}`);
};

// random cocktail
export const cocktailRandom = async () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB_KEY}/random.php`);
};

// ten random cocktails
export const cocktailParty = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB_KEY}/randomselection.php`);
}

// 
export const cocktailPopular = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB_KEY}/popular.php`);
}