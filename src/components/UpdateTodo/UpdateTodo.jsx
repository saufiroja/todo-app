import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem('ID'));
    setTitle(localStorage.getItem('TITLE'));
    setDescription(localStorage.getItem('DESCRIPTION'));
  }, []);

  const handleChangeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleUpdate = (e) => {
    const data = {
      title,
      description,
    };
    axios
      .put(`https://todo-app-for-example.herokuapp.com/api/todo/${id}`, data)
      .then(() => {
        navigate('/');
      });
  };
  return (
    <>
      <Container maxWidth='sm'>
        <Typography variant='h5' align='center' pt={2}>
          Update Todo
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
                  value={title}
                  onChange={handleChangeTitle}
                  sx={{ width: '100%' }}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  type='text'
                  label='Description'
                  variant='outlined'
                  size='small'
                  value={description}
                  onChange={handleChangeDescription}
                  sx={{ width: '100%' }}
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
            type='submit'
            onClick={handleUpdate}
          >
            Update
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default UpdateTodo;
