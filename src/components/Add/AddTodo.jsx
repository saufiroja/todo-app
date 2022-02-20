import { Box, Button, Container, TextField, Typography } from '@mui/material';

import React from 'react';

const AddTodo = () => {
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
                />
              </Box>
              <Box mb={2}>
                <TextField
                  type='text'
                  label='Description'
                  variant='outlined'
                  size='small'
                  sx={{ width: '100%' }}
                />
              </Box>
            </Box>
          </Box>
        </main>
        <Box textAlign='center'>
          <Button sx={{ width: '100%' }} variant='contained' size='small'>
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default AddTodo;
