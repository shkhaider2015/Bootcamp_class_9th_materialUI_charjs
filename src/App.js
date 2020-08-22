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
        textAlign : 'center',
        width : '100%',
        '& > *' : {
          // paddingRight : '15px',
          // paddingLeft : '15px',
          // marginRight : 'auto',
          // marginLeft : 'auto',
        }
      },
      login : {
        display : 'inline-block',
        marginTop : '200%'
      }

    }
  )
)

function App() {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <br />
      <Container maxWidth='lg' style={{ border : '1px solid',display : 'flex', justifyContent : 'center', padding : '10px', height : '150mm'}}>
      <Login className={classes.login} />
      </Container>
    </div>
  );
}

export default App;
