import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(
    (theme) => (
        {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                textAlign : 'center',
                '& > *': {
                    margin: theme.spacing(1),
                    width: theme.spacing(48),
                    height: theme.spacing(48)
                },
            },
            form : {
                marginTop : '20%',
                // marginLeft : '20%'
                display : 'inline-block'
            }
        }
    )
)

function Login() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Paper 
            variant="elevation"
            elevation={3}
            >
                <form className={classes.form} noValidate autoComplete="off"  >
                    <div><TextField
                        variant="outlined"
                        type="email"
                        label="Email" />
                    </div><br />
                    <div><TextField
                        variant="outlined"
                        type="password"
                        label="Password" />
                    </div><br />
                    <Button
                        variant="contained"
                        type="submit"
                        color="primary" >
                        Login</Button>

                </form>
            </Paper>
        </div>
    )
}

export default Login;