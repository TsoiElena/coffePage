import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import CoffeeCard from "./CoffeeCard"

const useStyles = makeStyles(() => ({
        main: {
            display: 'flex',
            flexWrap: 'wrap',
        }
    })
)

const CoffeePage = ({coffeeList}) => {
    const classes = useStyles()

    return (
        <div className={classes.main}>
            {coffeeList && coffeeList.map(coffee => (
                <CoffeeCard id={coffee.id} name={coffee.blend_name} origin={coffee.origin} notes={coffee.notes} />
            ))}
        </div>
    )
}

export default CoffeePage
