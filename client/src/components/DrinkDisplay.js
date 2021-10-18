import Avatar from '@mui/material/Avatar';

export default function DrinkDisplay({randomDrinkData}) {
    return (
        <div className="DrinkDisplay">
            <Avatar alt="Drink1" src={randomDrinkData.drinkImg} sx={{ width: 100, height: 100, zIndex: -1 }} />
            <label>{randomDrinkData.drinkName}</label>
        </div>
    )
}