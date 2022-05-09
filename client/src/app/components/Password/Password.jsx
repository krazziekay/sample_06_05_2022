import React from 'react';
import AddPasswordCard from './../AddPasswordCard';
import PasswordList from './../PasswordList';

const App = () => {
  return (
    <>
      <h1>List of Passwords</h1>
      <PasswordList />
      <br />
      <hr />
      <br />
      <AddPasswordCard />
    </>
  )
};

export default App;