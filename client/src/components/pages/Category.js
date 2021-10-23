import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import "../../App.css";
import { allCategory } from '../../utils/API';

export default function Category({ currentPage, handlePageChange, setQuery }) {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const loadCategory = async (event) => {

      try {
        const response = await allCategory();
        if (!response.ok) {
          throw new Error('Umm... try again?');
        }
        // console.log(response.json);
        const { drinks } = await response.json();
        // // Use the following console log to see the parsed response structure.
        // console.log(drinks)
        const categoryData = drinks.map((input) => ({
            drinkCategory: input.strCategory
        }));
        // // Test final drinkData.
        // console.log(categoryData);
        setCategoryData(categoryData);

      } catch (err) {
        console.error(err);
      }
    };

    loadCategory();

  }, [setCategoryData])

  // console.log(categoryData)

  const renderCategory = () => {
    return (
      categoryData.map((category, index) => {
        return (
          <div key={index} className="avatarStyles" onClick={() => { setQuery(category.drinkCategory); handlePageChange("CategoryResults") }}>
            <List alt={category.drinkCategory} sx={{ 
            fontSize: "large",
            marginBottom: .5,
            marginTop: .5,
            padding: .5,
            border: 2,
            borderRadius: 5,
            zIndex: -1 }}>
            <Button>{category.drinkCategory}</Button>
            </List>
          </div>
        )
      }))
  };

  return (
    <div className="HomePageUI">
      <h3 className="Header-SuggestedDrink">Explore Drinks by Category:</h3>
      <div className="caGlTyContainer">
        {renderCategory()}
      </div>
    </div>
  );
}


