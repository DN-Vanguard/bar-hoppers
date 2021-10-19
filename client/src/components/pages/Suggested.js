import React, { useState, useEffect } from 'react';
import "../../App.css"
import { cocktailPopular } from '../../utils/API';
import Avatar from '@mui/material/Avatar';

export default function Suggested() {
    const [popularDrinkData, setPopularDrinkData] = useState([]);
    useEffect(() => {
        const loadPopular = async (event) => {

            try {
                const response = await cocktailPopular();
                if (!response.ok) {
                    throw new Error('Umm... try again?');
                }
                const { drinks } = await response.json();
                // Use the following console log to see the parsed response structure.
                // console.log(drinks)
                const drinkData = drinks.map((drink) => ({
                    drinkID: drink.idDrink,
                    drinkName: drink.strDrink,
                    drinkCategory: drink.strCategory,
                    drinkAlcoholic: drink.strAlcoholic,
                    drinkGlass: drink.strGlass,
                    drinkInstructions: drink.strInstructions,
                    drinkImg: drink.strDrinkThumb,
                }));
                // Test final drinkData.
                // console.log(drinkData);
                setPopularDrinkData(drinkData);

            } catch (err) {
                console.error(err);
            }
        };

        loadPopular();

    }, [setPopularDrinkData])

    // console.log(popularDrinkData);

    return (
        <div className="App">
            <div className="SuggestedPageUI">
                <h3>Suggested Drink</h3>
                {popularDrinkData.map((drink) => {
                    return (
                        <div key={drink.drinkID} className="SuggestedDrinkDisplay">
                            <Avatar alt={drink.drinkName} src={`${drink.drinkImg}/preview`} sx={{ width: 75, height: 75, zIndex: -1 }} />
                            <label>{drink.drinkName}</label>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}