import React from 'react';
import logo from '../../logo.svg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "../../App.css"

export default function Landing() {
    return (
        <div className="App">
            <body className="landingUI">
                <img src={logo} className="App-logo" alt="logo" />
                <Stack spacing={2} direction="column">
                    <Button variant="contained">Sign Up</Button>
                    <Button variant="contained">Login</Button>
                </Stack>
            </body>
        </div>
    );
}