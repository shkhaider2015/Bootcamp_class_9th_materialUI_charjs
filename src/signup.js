import React from 'react'
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(
    (theme) => (
        {
            paper : {
                height : theme.spacing(48),
                width : theme.spacing(60),
                margin : theme.spacing(1),
                padding : theme.spacing(0),
                display : 'flex',
                textAlign : 'center'

            },
            form : {
                display : 'inline-block',
                padding : '10px'
            },
            names : {
                display : 'flex'
            },
        }
    )
)

function Signup() {

    const classes = useStyle()

    return (
        <Paper
            variant="elevation"
            elevation={3}
            className = {classes.paper}
        >

            <form
                noValidate
                autoComplete="off"
                className = {classes.form}
            >
                <div
                className = { classes.names}
                >
                    <div style={{margin : "10px"}} >
                    <TextField
                        variant="outlined"
                        type="text"
                        label="First Name"
                    />
                    </div>
                    <div style={{margin : "10px"}} >
                    <TextField
                        variant="outlined"
                        type="text"
                        label="Last Name"
                    />
                    </div>
                </div> <br />
                <div>
                <TextField
                    variant="outlined"
                    type="email"
                    label="Email"
                />
                </div> <br />
                <div>
                <TextField
                    variant="outlined"
                    type="password"
                    label="Password"
                />
                </div> 
                 <br />
                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                >
                    Sign Up
                </Button> <br /> <br />

                Already have an account ? <Link>Sign in here</Link>

            </form>
        </Paper>
    )

}

export default Signup;