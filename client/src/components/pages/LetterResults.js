import { searchByFirstLetter } from '../../utils/API';
import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import "../../App.css";

export default function Search({currentPage, handlePageChange, query}) {
    const [letterResults, setLetterResults] = useState([]);

    // console.log(query);

    useEffect(() => {
        const perfLetterNumber = async (event) => {

            try {
                const response = await searchByFirstLetter(query);
                if (!response.ok) {
                    throw new Error('Umm... try again?');
                }
                const { drinks } = await response.json();
                // Use the following console log to see the parsed response structure.
                // console.log(drinks)
                if (!drinks) {
                    setLetterResults(drinks);
                }
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
                setLetterResults(drinkData);

            }  catch (err) {
                console.error(err);
            }
        }

        perfLetterNumber();

    }, [query, setLetterResults])

    // console.log(searchResults);

    const renderLetterResults = () => {
        return (
            letterResults.map((drink) => {
                return (
                    <div key={drink.drinkID} className="SuggestedPageDisplay" sx={{ height: { xs: 120, sm: 150 } }} onClick={() => handlePageChange(drink.drinkID)}>
                        <Avatar alt={drink.drinkName} src={`${drink.drinkImg}/preview`} sx={{ width: { xs: 75, sm: 100 }, height: { xs: 75, sm: 100 }, zIndex: -1 }} />
                        <label>{drink.drinkName}</label>
                    </div>
                )
            })
        )
    }

    return (
        <div>
            <div className="SuggestedPageUI">
                <h3 className="Header-SuggestedDrink">Search Results: {query}</h3>
                <div className="AllSuggestedDrinks">
                    {letterResults ? renderLetterResults() : <h3 className="NoResult">No results for "{query}"</h3>}
                </div>
            </div>

        </div>
    )
}