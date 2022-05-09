import React from 'react';
import { useGetPasswordQuery } from '../../__generated/schema';
import {styles} from './App.styles';


const App = () => {
  const {data, loading} = useGetPasswordQuery();
  return (
    <>
      <div style={styles.header}>This is my App - kAy</div>
      <div>This is my App - kAy</div>
      <h1>List of Passwords</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {JSON.stringify(data)}
        </div>     
      )}
    </>
  )
};

export default App;