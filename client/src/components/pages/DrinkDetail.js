import React, { useState, useEffect } from 'react';
import "../../App.css"
import { searchByID } from '../../utils/API';

export default function DrinkDetail(input) {
    const [drinkData, setDrinkData] = useState([]);

    // console.log(drinkID.drinkID);

    useEffect(() => {
        const loadDrinkDetail = async (event) => {

            try {
                const response = await searchByID(input.drinkID);
                if (!response.ok) {
                    throw new Error('Umm... try again?');
                }
                const parsedRes = await response.json();
                // Use the following console log to see the parsed response structure.
                // console.log(parsedRes.drinks[0]);
                const drinkDetail = {
                    drinkID: input.drinkID,
                    drinkName: parsedRes.drinks[0].strDrink,
                    drinkCategory: parsedRes.drinks[0].strCategory,
                    drinkAlcoholic: parsedRes.drinks[0].strAlcoholic,
                    drinkGlass: parsedRes.drinks[0].strGlass,
                    drinkInstructions: parsedRes.drinks[0].strInstructions,
                    drinkImg: parsedRes.drinks[0].strDrinkThumb,
                }
                // Test final drinkData.
                // console.log(drinkDetail);
                setDrinkData(drinkDetail);

            } catch (err) {
                console.error(err);
            }
        };

        loadDrinkDetail();
    }, [input.drinkID, setDrinkData]);

    // console.log(drinkData)

    return (
        <div>
            <div className="SuggestedPageUI">
                <h3 className="Header-SuggestedDrink">{drinkData.drinkName}</h3>
                <img src={`${drinkData.drinkImg}/preview`} alt={drinkData.drinkName} />
            </div>
        </div>
    )
}