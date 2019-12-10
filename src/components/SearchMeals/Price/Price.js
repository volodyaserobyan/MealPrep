import React, { useState } from 'react'
import Slider from "@material-ui/core/Slider";
import './Price.scss'
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//     root: {
//         width: '100%',
//         color: 'red',
//         colorSecondary: 'green'
//     }
// });

const Price = () => {
    // const classes = useStyles();
    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div className="SearchMealsDashboard-Cont-Filters-Price">
            <h2 className="Filters-Title">Price</h2>
            <div className="Filters-Container">
                <Slider
                    // className={classes.root}
                    min={0}
                    max={1000}
                    step={1}
                    value={value}
                    onChange={handleChange}
                />
                <div className="Price-Prices">
                    <p>${value[0]}</p>
                    <p>${value[1]}</p>
                </div>
            </div>
        </div>
    )

}

export default Price