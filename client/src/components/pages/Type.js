import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import "../../App.css";
import { allTypes } from '../../utils/API';

export default function Alcoholic({ currentPage, handlePageChange, setQuery }) {
  const [alcoholicData, setAlcoholicData] = useState([]);
  useEffect(() => {
    const loadAlcoholic = async (event) => {

      try {
        const response = await allTypes();
        if (!response.ok) {
          throw new Error('Umm... try again?');
        }
        // console.log(response.json);
        const { drinks } = await response.json();
        // // Use the following console log to see the parsed response structure.
        // console.log(drinks)
        const alcoholicData = drinks.map((input) => ({
            drinkAlcoholic: input.strAlcoholic
        }));
        // // Test final drinkData.
        // console.log(alcoholicData);
        setAlcoholicData(alcoholicData);

      } catch (err) {
        console.error(err);
      }
    };

    loadAlcoholic();

  }, [setAlcoholicData])

  // console.log(alcoholicData)

  const renderAlcoholic = () => {
    return (
      alcoholicData.map((Alcoholic, index) => {
        return (
          <div key={index} className="avatarStyles" onClick={() => { setQuery(Alcoholic.drinkAlcoholic); handlePageChange("TypeResults") }}>
            <List alt={Alcoholic.drinkAlcoholic} sx={{ 
            fontSize: "large",
            marginBottom: .5,
            marginTop: .5,
            padding: .5,
            border: 2,
            borderRadius: 5,
            zIndex: -1 }}>
            <Button>{Alcoholic.drinkAlcoholic}</Button>
            </List>
          </div>
        )
      }))
  };

  return (
    <div className="HomePageUI">
      <h3 className="Header-SuggestedDrink">Explore Drinks by Type:</h3>
      <div className="caGlTyContainer">
        {renderAlcoholic()}
      </div>
    </div>
  );
}


