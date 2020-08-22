import React from 'react';
import './App.css';
import Login from './login.js'
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container'

const useStyle = makeStyles(
  (theme) => 
  (
    {
      root : {
        // textAlign : 'center',
        '& > *' : {
          // paddingRight : '15px',
          // paddingLeft : '15px',
          // marginRight : 'auto',
          // marginLeft : 'auto',
        }
      },
      login : {
        display : 'inline-block'
      }

    }
  )
)

function App() {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <br />
      <Container fixed>
      <Login className={classes.login} />
      </Container>
    </div>
  );
}

export default App;
