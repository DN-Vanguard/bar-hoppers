import Avatar from '@mui/material/Avatar';

export default function DrinkDisplay({drinkData}) {
    return (
        <div className="DrinkDisplay">
            <Avatar alt={drinkData.drinkName} src={`${drinkData.drinkImg}/preview`} sx={{ width: 100, height: 100, zIndex: -1 }} />
            <label>{drinkData.drinkName}</label>
        </div>
    )
}