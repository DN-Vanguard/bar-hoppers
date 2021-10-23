export const getSavedDrinkIDs = () => {
    const savedDrinkIDs = localStorage.getItem('saved_drinks')
      ? JSON.parse(localStorage.getItem('saved_drinks'))
      : [];
  
    return savedDrinkIDs;
  };
  
  export const saveDrinkIDs = (drinkIDArr) => {
    if (drinkIDArr.length) {
      localStorage.setItem('saved_drinks', JSON.stringify(drinkIDArr));
    } else {
      localStorage.removeItem('saved_drinks');
    }
  };
  
  export const removeDrinkID = (drinkID) => {
    const savedDrinkIDs = localStorage.getItem('saved_drinks')
      ? JSON.parse(localStorage.getItem('saved_drinks'))
      : null;
  
    if (!savedDrinkIDs) {
      return false;
    }
  
    const updatedSavedDrinkIDs = savedDrinkIDs?.filter((savedDrinkID) => savedDrinkID !== drinkID);
    localStorage.setItem('saved_drinks', JSON.stringify(updatedSavedDrinkIDs));
  
    return true;
  };
  