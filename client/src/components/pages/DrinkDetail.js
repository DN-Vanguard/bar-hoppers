import React, { useState, useEffect } from 'react';
import "../../App.css"
import { searchByID } from '../../utils/API';
import BookmarkIcon from '@mui/icons-material/Bookmark';

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
            <div className="DrinkDetailUI">
                <div className="Header-DrinkDetail">
                    <h2>{drinkData.drinkName}</h2>
                    <div>
                        <BookmarkIcon fontSize="large"/>
                    </div>
                </div>
                <img className="DrinkImg" src={drinkData.drinkImg} alt={drinkData.drinkName} />
                <h3>Instruction</h3>
                <hr />
                <p>{drinkData.drinkInstructions}</p>
                <h3>Details about the drink</h3>
                <hr />
                <div className="DetailsAboutDrink">
                    <div className="DetailsAboutDrinkLabel">
                        <p>Category:</p>
                        <p>Alcoholic:</p>
                        <p>Glass:</p>
                    </div>
                    <div>
                        <p>{drinkData.drinkCategory}</p>
                        <p>{drinkData.drinkAlcoholic}</p>
                        <p>{drinkData.drinkGlass}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}