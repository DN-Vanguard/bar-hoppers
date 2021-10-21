import React, { useState, useEffect } from 'react';
import "../../App.css"
import { cocktailPopular } from '../../utils/API';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';



export default function Home({ currentPage, handlePageChange }) {
    const [popularDrinkData, setPopularDrinkData] = useState([]);
    const [renderViewAll, setRenderViewAll] = useState(false);

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
                setPopularDrinkData(drinkData.splice(0, 10));
                setRenderViewAll(true);

            } catch (err) {
                console.error(err);
            }
        };

        loadPopular();

    }, [setPopularDrinkData]);

    // console.log(popularDrinkData);

    const renderVAAvatar = () => {
        if (renderViewAll === true) {
            return (
                <div className="SuggestedDrinkDisplay" onClick={() => handlePageChange("Suggested")}>
                    <Avatar alt="View All" sx={{ width: 75, height: 75, zIndex: -1, fontSize: "medium" }}>View All</Avatar>
                </div>
            )
        }
    }

    return (
        <div>
            <div className="HomePageUI">
                <h3 className="Header-SuggestedDrink">Suggested Drinks</h3>
                <div className="SuggestedDrink">
                    <Stack direction="row">
                        {popularDrinkData.map((drink) => {
                            return (
                                <div key={drink.drinkID} className="SuggestedDrinkDisplay" onClick={() => handlePageChange(drink.drinkID)}>
                                    <Avatar alt={drink.drinkName} src={`${drink.drinkImg}/preview`} sx={{ width: 75, height: 75, zIndex: -1 }} />
                                    <label>{drink.drinkName}</label>
                                </div>
                            )
                        })}
                        {renderVAAvatar()}
                    </Stack>
                </div>
            </div>
        </div>
    );
}