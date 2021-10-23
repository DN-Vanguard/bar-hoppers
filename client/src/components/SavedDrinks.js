import { Avatar, Stack, IconButton } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { REMOVE_DRINK } from "../utils/mutations"
import { GET_ME } from "../utils/queries"
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { removeDrinkID } from "../utils/localStorage";

const SavedDrinks = ({ currentPage, handlePageChange }) => {
    const { loading, error, data } = useQuery(GET_ME)
    if (error) {
        console.error(error)
    }
    const [removeDrink] = useMutation(REMOVE_DRINK, { refetchQueries: [GET_ME] });
    console.log(data)
    const userData = data?.me;
    console.log(userData)


    const handleDeleteDrink = async (drinkID) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            await removeDrink({
                variables: { drinkID },
            })
            removeDrinkID(drinkID);
        } catch (err) {
            console.error(err);
        }
    }

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <div>
            <Stack direction="column">
                {userData.savedDrinks.map((drink) => {
                    return (
                        <div>
                            <div className="FavoriteDrinkDisplay" key={drink.drinkID}>
                                <div className="FavoriteDrinkDisplayButton" onClick={() => handlePageChange(drink.drinkID)}>
                                    <Avatar alt={drink.drinkName} src={`${drink.drinkImg}/preview`} sx={{ width: 50, height: 50, zIndex: -1 }} />
                                    <label>{drink.drinkName}</label>
                                </div>
                                <div>
                                    <IconButton onClick={() => handleDeleteDrink(drink.drinkID)} style={{ cursor: "pointer" }} >
                                        <DeleteForeverIcon fontSize="large" />
                                    </IconButton>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </Stack>
        </div>
    )
}

export default SavedDrinks;