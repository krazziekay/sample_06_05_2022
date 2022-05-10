import React from 'react';
import AddPasswordCard from '../AddPasswordCard';
import PasswordList from '../PasswordList';
import { Typography } from '@mui/material';
import { styles } from './index.styles';

const App = () => {
  return (
    <div style={styles.body}>
      <Typography variant="h3" gutterBottom>List of Passwords</Typography>
      <PasswordList />
      <br />
      <hr />
      <br />
      <AddPasswordCard />
    </div>
  )
};

export default App;