import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
        root: {
            height: '200px',
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: '20px'
        },
        origin: {
            marginBottom: 12,
        }
    })
)

const CoffeeCard = ({id, name, origin, notes}) => {
    const classes = useStyles()

    return (
        <Card className={classes.root} variant="outlined" key={id}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography className={classes.origin} color="textSecondary">
                    происхождение: {origin}
                </Typography>
                <Typography variant="body2" component="p">
                    теги: {notes}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CoffeeCard
