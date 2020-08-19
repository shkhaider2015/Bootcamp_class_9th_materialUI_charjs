import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import Login from './login.js'

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary" >
        Hello Button</Button>
        <Login/>
    </div>
  );
}

export default App;
