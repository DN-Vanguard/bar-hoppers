import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MapIcon from '@mui/icons-material/Map';
import Paper from '@mui/material/Paper';

export default function BottomNav({ currentPage, handlePageChange }) {
    const [value, setValue] = React.useState(0);
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, paddingBottom: { xs: 2, sm: 0 } }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => handlePageChange("Home")} />
                <BottomNavigationAction label="Profile" icon={<PersonIcon />} onClick={() => handlePageChange("Profile")} />
                <BottomNavigationAction label="Favorite" icon={<BookmarkIcon />} onClick={() => handlePageChange("Favorite")} />
                <BottomNavigationAction label="Map" icon={<MapIcon />} onClick={() => handlePageChange("Map")} />
            </BottomNavigation>
        </Paper>
    );
}
