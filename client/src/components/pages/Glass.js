import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import "../../App.css";
import { allGlasses } from '../../utils/API';

export default function Glass({ currentPage, handlePageChange, setQuery }) {
  const [glassData, setGlassData] = useState([]);
  useEffect(() => {
    const loadGlasses = async (event) => {

      try {
        const response = await allGlasses();
        if (!response.ok) {
          throw new Error('Umm... try again?');
        }
        // console.log(response.json);
        const { drinks } = await response.json();
        // // Use the following console log to see the parsed response structure.
        // console.log(drinks)
        const glassData = drinks.map((input) => ({
            drinkGlass: input.strGlass
        }));
        // // Test final drinkData.
        // console.log(glassData);
        setGlassData(glassData);

      } catch (err) {
        console.error(err);
      }
    };

    loadGlasses();

  }, [setGlassData])

  // console.log(glassData)

  const renderGlasses = () => {
    return (
      glassData.map((Glass, index) => {
        return (
          <div key={index} className="avatarStyles" onClick={() => { setQuery(Glass.drinkGlass); handlePageChange("GlassResults") }}>
            <List alt={Glass.drinkGlass} sx={{ 
            fontSize: "large",
            marginBottom: .5,
            marginTop: .5,
            padding: .5,
            border: 2,
            borderRadius: 5,
            zIndex: -1 }}>
            <Button>{Glass.drinkGlass}</Button>
            </List>
          </div>
        )
      }))
  };

  return (
    <div className="HomePageUI">
      <h3 className="Header-SuggestedDrink">Explore Drinks by Glass:</h3>
      <div className="caGlTyContainer">
        {renderGlasses()}
      </div>
    </div>
  );
}


