import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/add');
  };
  return (
    <>
      <Container maxWidth='md'>
        <Typography variant='h5' pt={3} align='center'>
          Todo App React
        </Typography>
        <Box pt={2} justifyContent='start' display='flex'>
          <Button variant='contained' size='small' onClick={handleClick}>
            Add
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Main;
