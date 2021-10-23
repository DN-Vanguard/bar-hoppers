import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
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
            <Avatar variant="outlined" alt={category.drinkCategory} sx={{ width: 50, height: 50, fontSize: "x-large" }}>{category.drinkCategory}</Avatar>
          </div>
        )
      }))
  };

  return (
    <div>
      <h3 className="Header-SuggestedDrink, margin">Explore drinks by category:</h3>
      <div className="alphabetContainer">
        {renderCategory()}
      </div>
    </div>
  );
}


