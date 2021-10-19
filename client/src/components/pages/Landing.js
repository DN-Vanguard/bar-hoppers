import React from 'react';
import logo from '../../logo-bh.png';
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
                <img src={logo} className="App-logo" alt="logo" />
                <Stack spacing={2} direction="column">
                    <SignupForm />
                    <LoginForm />
                </Stack>
            </body>
        </div>
    );
}