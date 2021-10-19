import React, { useState, useEffect } from 'react';
import "../../App.css"
import { cocktailPopular } from '../../utils/API';
import DrinkDisplay from '../DrinkDisplay';



export default function Home() {
    const [popularDrinkData, setPopularDrinkData] = useState();
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

    },[setPopularDrinkData])

    console.log(popularDrinkData);

    return (
        <div className="App">
            <div className="landingUI">
            <DrinkDisplay drinkData={popularDrinkData} sx={{ paddingBottom: 2 }} />
            </div>
        </div>
    );
}