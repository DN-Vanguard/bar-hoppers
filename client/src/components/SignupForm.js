import React, { useState } from 'react';
import { ADD_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
// There was Alert down here
import { Modal, FormControl, InputLabel, Input, Button } from '@mui/material';
import { Box } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  bgcolor: '#FFF',
  borderStyle: 'none',
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column'
};

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  // const [showAlert, setShowAlert] = useState(false);
  const [addUser] = useMutation(ADD_USER);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (event) => {

    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    console.log(name, value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data: info } = await addUser({
        variables: { ...userFormData }
      });
      Auth.login(info.addUser.token);
    } catch (err) {
      console.error(err);
      // setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen} sx={{fontSize: 'large', fontWeight: 'bold', borderRadius: '5rem'}}>Sign Up</Button>
      <Modal open={open} onClose={handleClose}>
      {/* This is needed for the validation functionality above */}
        <Box sx={style}
          component="form"
          noValidate
          validated={validated}
          onSubmit={handleFormSubmit}
        >
          {/* show alert if server response is bad */}
          {/* <Alert
            dismissible
            onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something went wrong with your signup!
          </Alert> */}

          <FormControl sx={{margin: '0.25rem 0.5rem 0.5rem 0.5rem'}}>
            <InputLabel htmlFor='username'>Username</InputLabel>
            <Input
              // error
              type='text'
              name='username'
              onChange={handleInputChange}
              value={userFormData.username}
              required
            />
            {/* <FormControl.Feedback type='invalid'>Username is required!</FormControl.Feedback> */}
          </FormControl>

          <FormControl sx={{margin: '0.25rem 0.5rem 0.5rem 0.5rem'}}>
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input
              // error
              type='email'
              name='email'
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            {/* <FormControl.Feedback type='invalid'>Email is required!</FormControl.Feedback> */}
          </FormControl>

          <FormControl sx={{margin: '0.25rem 0.5rem 0.5rem 0.5rem'}}>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input
              // error
              type='password'
              name='password'
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            {/* <FormControl.Feedback type='invalid'>Password is required!</FormControl.Feedback> */}
          </FormControl>
          <Button
            disabled={!(userFormData.username && userFormData.email && userFormData.password)}
            type='submit'
            variant='success'
            sx={{borderStyle: 'none', top: '1rem', backgroundColor: '#3b8ad9', color: 'white', width: 'fit-content', alignSelf: 'center', fontSize: 'large', fontWeight: 'bold', borderRadius: '5rem'}}
            >
            SIGN UP
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default SignupForm;
