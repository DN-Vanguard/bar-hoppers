import logo from '../../logo-bh.png';
import "../../App.css";
import { cocktailRandom } from '../../utils/API';
import { Button } from '@mui/material';
import { useState } from 'react';
import DrinkDisplay from '../DrinkDisplay';


export default function Random() {
    const [randomDrinkData, setRandomDrinkData] = useState();
    const handleClick = async (event) => {

        try {
            const response = await cocktailRandom();
            if (!response.ok) {
                throw new Error('Umm... try again?');
            }
            const parsedRes = await response.json();
            // Use the following console log to see the parsed response structure.
            // console.log(parsedRes.drinks[0])
            const drinkData = {
                drinkName: parsedRes.drinks[0].strDrink,
                drinkImg: parsedRes.drinks[0].strDrinkThumb,
            }
            // Test final drinkData.
            // console.log(drinkData);
            setRandomDrinkData(drinkData);

        } catch (err) {
            console.error(err);
        }
    };

    const renderDrink = () => {
        return <DrinkDisplay drinkData={randomDrinkData} sx={{ paddingBottom: 2 }} />
    }

    return (
        <div className="App">
            <div className="landingUI">

                {randomDrinkData ? renderDrink() : <img src={logo} className="App-logo" alt="logo" />}
                <Button sx={{marginTop: 2}}variant="contained" onClick={() => handleClick()}>
                    DRINK ME
                </Button>
            </div>
        </div>
    );
}