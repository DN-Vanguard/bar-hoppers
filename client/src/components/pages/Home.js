import React from 'react';
import "../../App.css"
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import plImg from '../../logo-bh.png';


export default function Home() {
    return (
        <div className="App">
            <div className="HomePageUI">
                <Box className="SuggestedDrink-Display">
                    <Stack direction="row" spacing={2} >
                        <Avatar alt="Drink1" src={plImg} sx={{ width: 56, height: 56, zIndex:-1}} />
                        <label>Drink Name</label>
                    </Stack>
                </Box>
            </div>
        </div>
    );
}