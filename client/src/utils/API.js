require('dotenv').config();

// search thecocktaildb by drinkID
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

// search thecocktaildb by first letter or #
export const searchByFirstLetter = (query) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB_KEY}/search.php?f=${query}`);
};

// List all CATEGORY
export const allCategory = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB_KEY}/list.php?c=list`);
}
// List all GLASSES
export const allGlasses = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB_KEY}/list.php?g=list`);
}
// List all INGREDIENTS
export const allIngredients = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB_KEY}/list.php?i=list`);
}
// List all TYPES
export const allTypes = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB_KEY}/list.php?a=list`);
}
// Filter by CATEGORY
export const filterCategory = (query) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB_KEY}/filter.php?c=${query}`);
}
// Filter by GLASS
export const filterGlass = (query) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB_KEY}/filter.php?g=${query}`);
}
// Filter by TYPE
export const filterType = (query) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB_KEY}/filter.php?a=${query}`);
}


// 
export const cocktailPopular = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB_KEY}/popular.php`);
}