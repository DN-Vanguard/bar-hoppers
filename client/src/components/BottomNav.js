import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MapIcon from '@mui/icons-material/Map';
import Paper from '@mui/material/Paper';


export default function BottomNav() {
    const [value, setValue] = React.useState();
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, paddingBottom: { xs: 4, sm: 0 } }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} href="/" />
                <BottomNavigationAction label="Profile" icon={<PersonIcon />} href="/profile" />
                <BottomNavigationAction label="Favorite" icon={<BookmarkIcon />} href="/favorite" />
                <BottomNavigationAction label="Map" icon={<MapIcon />} href="/map" />
            </BottomNavigation>
        </Paper>
    );
}
