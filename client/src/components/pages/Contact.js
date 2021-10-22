import React from 'react';
//import logo from '../../logo-bh.png';
import "../../App.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function Contact() {

    
    return (
        <div className="App"> 
      <Typography gutterBottom variant="h3" align="center">
        Bar-Hopper
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 400, padding: "60px 20px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us!
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill out this form and our team will get back to you as soon as possible.
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="tel" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="secondary" fullWidth>Submit</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
        
        
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


