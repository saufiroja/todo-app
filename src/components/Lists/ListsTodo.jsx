import { Delete, Edit } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListsTodo = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAllTodo();
  }, []);

  const getAllTodo = () => {
    setLoading(true);
    axios
      .get(`https://todo-app-for-example.herokuapp.com/api/todos`)
      .then((res) => {
        setTodo(res.data.todos);
        setLoading(false);
      });
  };

  const setData = (data) => {
    let { id, title, description } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('TITLE', title);
    localStorage.setItem('DESCRIPTION', description);
    navigate('/update');
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://todo-app-for-example.herokuapp.com/api/todo/${id}`)
      .then(() => {
        getAllTodo();
      })
      .catch((err) => {
        console.log('error:', err);
      });
  };
  return (
    <>
      <Container maxWidth='md'>
        <TableContainer>
          <Table>
            <TableHead>
              {todo.length === 0 ? (
                <Box display='flex' justifyContent='center'>
                  <Typography variant='h5'>No Data</Typography>
                </Box>
              ) : (
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell align='center'>Action</TableCell>
                </TableRow>
              )}
            </TableHead>
            <TableBody>
              <>
                {loading ? (
                  <Box
                    display='flex'
                    justifyContent='center'
                    height={50}
                    pt={5}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  todo.map((data) => {
                    return (
                      <TableRow key={data.id}>
                        <TableCell>{data.title}</TableCell>
                        <TableCell>{data.description}</TableCell>
                        <TableCell>
                          <Grid container spacing={2} justifyContent='center'>
                            <Grid item>
                              <Button
                                variant='contained'
                                color='primary'
                                size='small'
                                onClick={() => setData(data)}
                              >
                                <Edit fontSize='small' />
                              </Button>
                            </Grid>
                            <Grid item>
                              <Button
                                variant='contained'
                                color='error'
                                size='small'
                                onClick={() => handleDelete(data.id)}
                              >
                                <Delete fontSize='small' />
                              </Button>
                            </Grid>
                          </Grid>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default ListsTodo;
