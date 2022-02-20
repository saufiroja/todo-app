import { Delete, Edit } from '@mui/icons-material';
import {
  Button,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListsTodo = () => {
  const navigate = useNavigate();
  const handleUpdate = () => {
    navigate('/update');
  };
  return (
    <>
      <Container maxWidth='md'>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align='center'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Mandi</TableCell>
                <TableCell>mandi sambil jalan</TableCell>
                <TableCell>
                  <Grid container spacing={2} justifyContent='center'>
                    <Grid item>
                      <Button
                        variant='outlined'
                        color='primary'
                        size='small'
                        onClick={handleUpdate}
                      >
                        <Edit fontSize='small' />
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant='contained' color='primary' size='small'>
                        <Delete fontSize='small' />
                      </Button>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default ListsTodo;
