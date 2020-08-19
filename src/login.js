import React from 'react'
import TextField from '@material-ui/core/TextField'

function Login()
{
    return(
        <div>
            <form noValidate autoComplete="off"  >
                <TextField variant="outlined" label="Email" />
                <TextField variant="outlined" label="Password" />

            </form>
        </div>
    )
}

export default Login;