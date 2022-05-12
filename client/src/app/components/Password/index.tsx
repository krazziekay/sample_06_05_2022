import React from 'react';
import AddPasswordCard from '../AddPasswordCard';
import PasswordList from '../PasswordList';
import { Typography, Grid } from '@mui/material';

const App = () => {
  return (
    <div> 
      <Typography variant="h3" gutterBottom>List of Passwords</Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={8}>
          <PasswordList />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <AddPasswordCard />
        </Grid>
      </Grid>
    </div>
  )
};

export default App;