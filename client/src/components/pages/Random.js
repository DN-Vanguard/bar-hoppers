import logo from '../../logo-bh.png';
import "../../App.css";
import { cocktailRandom } from '../../utils/API';
import { Button } from '@mui/material';
import { useState } from 'react';
import DrinkDisplay from '../DrinkDisplay';


export default function Random({ currentPage, handlePageChange }) {
    const [randomDrinkData, setRandomDrinkData] = useState();
    const handleClick = async (type) => {
        if (type === "solo") {
            try {
                const response = await cocktailRandom();
                if (!response.ok) {
                    throw new Error('Umm... try again?');
                }
                const parsedRes = await response.json();
                // Use the following console log to see the parsed response structure.
                // console.log(parsedRes.drinks[0])
                const drinkData = {
                    drinkID: parsedRes.drinks[0].idDrink,
                    drinkName: parsedRes.drinks[0].strDrink,
                    drinkImg: parsedRes.drinks[0].strDrinkThumb,
                }
                // Test final drinkData.
                // console.log(drinkData);
                setRandomDrinkData(drinkData);
    
            } catch (err) {
                console.error(err);
            }
        }
        if (type === "party") {
            try {
                const response = await cocktailRandom();
                if (!response.ok) {
                    throw new Error('Umm... try again?');
                }
                const parsedRes = await response.json();
                // Use the following console log to see the parsed response structure.
                // console.log(parsedRes.drinks[0])
                const drinkData = {
                    drinkID: parsedRes.drinks[0].idDrink,
                    drinkName: parsedRes.drinks[0].strDrink,
                    drinkImg: parsedRes.drinks[0].strDrinkThumb,
                }
                // Test final drinkData.
                // console.log(drinkData);
                setRandomDrinkData(drinkData);
    
            } catch (err) {
                console.error(err);
            }
        }
    };

    const renderDrink = () => {
        return <DrinkDisplay randomDrinkData={randomDrinkData} currentPage={currentPage} handlePageChange={handlePageChange} sx={{ paddingBottom: 2 }} />
    }

    return (
        <div className="App">
            <div className="landingUI">
                {randomDrinkData ? renderDrink() : <img src={logo} className="App-logo" alt="logo" />}
                <div>
                    <Button sx={{ marginTop: 2 }} variant="contained" onClick={() => handleClick("solo")}>Give Me "Solo"</Button>
                    <label>"Han Solo is your friend!?"</label>
                </div>
                <div>
                    <Button sx={{ marginTop: 2 }} variant="contained" onClick={() => handleClick("party")}>PARTAYYY!</Button>
                    <label>Party like the Great Gatsby</label>
                </div>
            </div>
        </div>
    );
}