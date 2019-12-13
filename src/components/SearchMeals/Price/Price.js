import React, { useState, useEffect } from 'react'
import Slider from "@material-ui/core/Slider";
import './Price.scss'

const Price = (props) => {
    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.toggleChange({ price: newValue })
    }

    useEffect(() => {
        if(props.currentDelete == 1 || props.clearAll == 'clear') {
            setValue([0, 0])
            props.toggleChange({ price: [] })
        }
    },
        [props.currentDelete, props.clearAll]
    );

    return (
        <div className="SearchMealsDashboard-Cont-Filters-Price">
            <h2 className="Filters-Title">Price</h2>
            <div className="Filters-Container">
                <Slider
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