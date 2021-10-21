import React from 'react';
//import logo from '../../logo-bh.png';
import "../../App.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';


export default function Contact() {
    
    return (
        <Card sx={{ minWidth: 275 }}>
             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Contact Us!
        </Typography>
        
            <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 5, width: '25ch' },
            }}
      noValidate
      autoComplete="off"
    >
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <CardActions>
            <Button variant="contained">Submit</Button>
            </CardActions>
        </Box>
    </Card>
        
        
        /*<div className="App">
            <div className="landingUI">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This is Contact Us.
                </p>
            </div>
        </div>*/
    );
}


