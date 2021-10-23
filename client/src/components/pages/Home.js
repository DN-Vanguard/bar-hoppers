import React, { useState, useEffect } from 'react';
import "../../App.css"
import { cocktailPopular } from '../../utils/API';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import ScienceIcon from '@mui/icons-material/Science';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import CategoryIcon from '@mui/icons-material/Category';
import ShuffleIcon from '@mui/icons-material/Shuffle';



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

    const renderHome = () => {
        if (renderViewAll === true) {
            return (
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
                            <div className="SuggestedDrinkDisplay" onClick={() => handlePageChange("Suggested")}>
                                <Avatar alt="View All" sx={{ width: 75, height: 75, zIndex: -1, fontSize: "medium" }}>View All</Avatar>
                            </div>
                        </Stack>
                    </div>
                    <div className="ExploreByHomeSec">
                        <h3>Explore Recipes By</h3>
                        <div className="ExploreByDisplay">
                            <div className="ExploreByLine">
                                <div className="ExploreByButton" onClick={() => handlePageChange("Letter")}>
                                    <Avatar alt="Letter" sx={{ width: 80, height: 80, zIndex: -1 }}><SortByAlphaIcon fontSize="large" /></Avatar>
                                    <label>Name</label>
                                </div>
                                <div className="ExploreByButton" onClick={() => handlePageChange("Ingredient")}>
                                    <Avatar alt="Ingredient" sx={{ width: 80, height: 80, zIndex: -1 }}><ScienceIcon fontSize="large" /></Avatar>
                                    <label>Ingredient</label>
                                </div>
                                <div className="ExploreByButton" onClick={() => handlePageChange("Glass")}>
                                    <Avatar alt="Glass" sx={{ width: 80, height: 80, zIndex: -1 }}><LocalBarIcon fontSize="large" /></Avatar>
                                    <label>Glass</label>
                                </div>
                            </div>
                            <div className="ExploreByLine">
                                <div className="ExploreByButton" onClick={() => handlePageChange("Category")}>
                                    <Avatar alt="Category" sx={{ width: 80, height: 80, zIndex: -1 }}><BrunchDiningIcon fontSize="large" /></Avatar>
                                    <label>Category</label>
                                </div>
                                <div className="ExploreByButton" onClick={() => handlePageChange("Type")}>
                                    <Avatar alt="Type" sx={{ width: 80, height: 80, zIndex: -1 }}><CategoryIcon fontSize="large" /></Avatar>
                                    <label>Type</label>
                                </div>
                                <div className="ExploreByButton" onClick={() => handlePageChange("Random")}>
                                    <Avatar alt="Random" sx={{ width: 80, height: 80, zIndex: -1 }}><ShuffleIcon fontSize="large" /></Avatar>
                                    <label>Random</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {renderHome()}
        </div>
    );
}