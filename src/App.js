import React from 'react';
import './App.css';
import Login from './login.js'
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import Signup from "./signup";
const useStyle = makeStyles(
  (theme) => 
  (
    {
      root : {
        textAlign : 'center',
        width : '100%',
        '& > *' : {
          // paddingRight : '15px',
          // paddingLeft : '15px',
          // marginRight : 'auto',
          // marginLeft : 'auto',
        }
      },
      container : {
        border : '1px solid',
        display : 'flex',
        justifyContent : 'center',
        padding : '10%',
        height : '180mm',  
      },
      login : {
        display : 'inline-block',
        flex : '30',
      }

    }
  )
)

function App() {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <br />
      <Container maxWidth='lg' className={classes.container} >
      <Login className={classes.login} />
      <Signup />
      </Container>
    </div>
  );
}

export default App;
