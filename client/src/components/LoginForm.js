// see SignupForm.js for comments
import React, { useState } from 'react';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { Box } from '@mui/system';
import { Modal, Alert, Button, FormControl, Input, InputLabel } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#FFF',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loginUser] = useMutation(LOGIN_USER);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
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
      const { data } = await loginUser({
        variables: { ...userFormData }
      })
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>Login</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}
          component="form"
          noValidate
          validated={validated}
          onSubmit={handleFormSubmit}
        >
          {/* <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something went wrong with your login credentials!
          </Alert> */}
          <FormControl>
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input
              type='email'
              name='email'
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            {/* <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback> */}
          </FormControl>

          <FormControl>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input
              type='password'
              name='password'
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            {/* <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback> */}
          </FormControl>
          <Button
            disabled={!(userFormData.email && userFormData.password)}
            type='submit'
            variant='success'>
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default LoginForm;
