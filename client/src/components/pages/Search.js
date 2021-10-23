import { useEffect, useState } from "react"
import { searchByName } from "../../utils/API";
import Avatar from '@mui/material/Avatar';

export default function Search({ currentPage, handlePageChange, query }) {
    const [searchResults, setSearchResults] = useState([]);

    // console.log(query);

    useEffect(() => {
        const perfSearch = async (event) => {

            try {
                const response = await searchByName(query);
                if (!response.ok) {
                    throw new Error('Umm... try again?');
                }
                const { drinks } = await response.json();
                // Use the following console log to see the parsed response structure.
                // console.log(drinks)
                if (!drinks) {
                    setSearchResults(drinks);
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
                setSearchResults(drinkData);

            } catch (err) {
                console.error(err);
            }
        }

        perfSearch();

    }, [query, setSearchResults])

    // console.log(searchResults);

    const renderSearchResult = () => {
        return (
            searchResults.map((drink) => {
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
                    {searchResults ? renderSearchResult() : <h3 className="NoResult">No result of "{query}"</h3>}
                </div>
            </div>

        </div>
    )
}