import React from 'react';
import banner from '../../banner.png'
import Stack from '@mui/material/Stack';
import "../../App.css"
import SignupForm from '../SignupForm';
// import Auth from '../../utils/auth';
import LoginForm from '../LoginForm';

export default function Landing() {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return (
        <div className="App">
            <body className="landingUI">
                <img src={banner} className="landingBanner" alt="Bar-Hoppers" />
                <Stack spacing={4} direction="column">
                    <SignupForm />
                    <LoginForm />
                </Stack>
            </body>
        </div>
    );
}