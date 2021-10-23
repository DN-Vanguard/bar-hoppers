import logo from "../../logo-bh.png";
import "../../App.css";
import { cocktailRandom } from "../../utils/API";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import DrinkDisplay from "../DrinkDisplay";
import { saveDrinkIDs, getSavedDrinkIDs } from "../../utils/localStorage";
import { useMutation } from "@apollo/client";
import { SAVE_DRINK } from "../../utils/mutations";
import Auth from "../../utils/auth";

export default function Random({ currentPage, handlePageChange }) {
  const [randomDrinkData, setRandomDrinkData] = useState();
  const [savedDrinkIDs, setSavedDrinkIDs] = useState(getSavedDrinkIDs());

  useEffect(() => {
    return () => saveDrinkIDs(savedDrinkIDs);
  });

  const [saveDrink] = useMutation(SAVE_DRINK);

  const handleClick = async (type) => {
    if (type === "solo") {
      try {
        const response = await cocktailRandom();
        if (!response.ok) {
          throw new Error("Umm... try again?");
        }
        const parsedRes = await response.json();
        // Use the following console log to see the parsed response structure.
        // console.log(parsedRes.drinks[0])
        const drinkData = {
          drinkID: parsedRes.drinks[0].idDrink,
          drinkName: parsedRes.drinks[0].strDrink,
          drinkCategory: parsedRes.drinks[0].strCategory,
          drinkAlcoholic: parsedRes.drinks[0].strAlcoholic,
          drinkGlass: parsedRes.drinks[0].strGlass,
          drinkInstructions: parsedRes.drinks[0].strInstructions,
          drinkImg: parsedRes.drinks[0].strDrinkThumb,
        };
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
          throw new Error("Umm... try again?");
        }
        const parsedRes = await response.json();
        // Use the following console log to see the parsed response structure.
        // console.log(parsedRes.drinks[0])
        const drinkData = {
          drinkID: parsedRes.drinks[0].idDrink,
          drinkName: parsedRes.drinks[0].strDrink,
          drinkImg: parsedRes.drinks[0].strDrinkThumb,
        };
        // Test final drinkData.
        // console.log(drinkData);
        setRandomDrinkData(drinkData);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSaveDrink = async (drinkToSave) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    console.log(drinkToSave);

    try {
      await saveDrink({ variables: { ...drinkToSave } });
      setSavedDrinkIDs([...savedDrinkIDs, drinkToSave.drinkID]);
    } catch (err) {
      console.error(err);
    }
  };

  const renderDrink = () => {
    return (
      <div>
        <DrinkDisplay
          randomDrinkData={randomDrinkData}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          sx={{ paddingBottom: 2 }}
        />
        <SaveAltIcon
          onClick={() => handleSaveDrink(randomDrinkData)}
        ></SaveAltIcon>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="landingUI">
        {randomDrinkData ? (
          renderDrink()
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
        )}
        <div>
          <Button
            sx={{ marginTop: 2 }}
            variant="contained"
            onClick={() => handleClick("solo")}
          >
            Give Me "Solo"
          </Button>
          <label>"Han Solo is your friend!?"</label>
        </div>
        <div>
          <Button
            sx={{ marginTop: 2 }}
            variant="contained"
            onClick={() => handleClick("party")}
          >
            PARTAYYY!
          </Button>
          <label>Party like the Great Gatsby</label>
        </div>
      </div>
    </div>
  );
}
