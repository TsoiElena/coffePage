import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
        header: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        info: {
            display: 'flex',
        },
        button: {
            display: 'inline-block',
            color: 'white',
            textDecoration: 'none',
            paddingLeft: '10px'
        }
    })
)


const Header = () => {
    const classes = useStyles()

    return (
        <AppBar position="sticky">
            <Toolbar className={classes.header}>
                <Typography variant="h6">
                    Наш суперкофе
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
