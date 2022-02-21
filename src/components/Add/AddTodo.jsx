import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmitTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmitDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleSubmitTodo = () => {
    const data = {
      title,
      description,
    };

    axios
      .post(`https://todo-app-for-example.herokuapp.com/api/todos`, data)
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log('error :', err);
      });
  };
  return (
    <>
      <Container maxWidth='sm'>
        <Typography variant='h5' align='center' pt={2}>
          Add Todo
        </Typography>
        <main>
          <Box component='form' mt={2}>
            <Box display='flex' flexDirection='column'>
              <Box mb={2}>
                <TextField
                  type='text'
                  label='Title'
                  variant='outlined'
                  size='small'
                  sx={{ width: '100%' }}
                  onChange={handleSubmitTitle}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  type='text'
                  label='Description'
                  variant='outlined'
                  size='small'
                  sx={{ width: '100%' }}
                  onChange={handleSubmitDescription}
                />
              </Box>
            </Box>
          </Box>
        </main>
        <Box textAlign='center'>
          <Button
            sx={{ width: '100%' }}
            variant='contained'
            size='small'
            onClick={handleSubmitTodo}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default AddTodo;
