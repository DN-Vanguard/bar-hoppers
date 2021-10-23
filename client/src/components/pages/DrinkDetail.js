import React, { useState, useEffect } from 'react';
import "../../App.css"
import { searchByID } from '../../utils/API';
import { useMutation } from '@apollo/client';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { IconButton } from '@mui/material';
import { getSavedDrinkIDs, saveDrinkIDs } from '../../utils/localStorage';
import { SAVE_DRINK } from '../../utils/mutations';
import Auth from '../../utils/auth';

export default function DrinkDetail(input) {
    const [drinkData, setDrinkData] = useState([]);
    const [savedDrinkIDs, setSavedDrinkIDs] = useState(getSavedDrinkIDs);

    // console.log(drinkID.drinkID);
    useEffect(() => {
        return () => saveDrinkIDs(savedDrinkIDs);
    });

    const [saveDrink] = useMutation(SAVE_DRINK);

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

    const handleSaveDrink = async (drinkToSave) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        }
        console.log(drinkToSave);

        try {
            await saveDrink({ variables: { ...drinkToSave }});
            setSavedDrinkIDs([...savedDrinkIDs, drinkToSave.drinkID]);
        } catch (err) {
            console.error(err);
        }
    }

    // console.log(drinkData)

    return (
        <div>
            <div className="DrinkDetailUI">
                <div className="Header-DrinkDetail">
                    <h2>{drinkData.drinkName}</h2>
                    <div>
                        <IconButton onClick={() => handleSaveDrink(drinkData)} style={{cursor:"pointer"}} >
                            <BookmarkIcon sx={{ zIndex: -1}}/>
                        </IconButton>
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
                        <p>Type:</p>
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