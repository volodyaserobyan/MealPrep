import React, { useState, useEffect } from 'react'
import Slider from "@material-ui/core/Slider";
import './Price.scss'

const Price = props => {
    // const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        
    }

    // useEffect(() => {
    //     if(props.currentDelete == 1 || props.clearAll == 'clear') {
    //         setValue([0, 0])
    //         props.toggleChange({ price: [] })
    //     }
    // },
    //     [props.currentDelete, props.clearAll]
    // );
    let value = []
    if(props.item != undefined) {
        value.push(props.item.start)
        value.push(props.item.end)
    }

    return (
        <div className="SearchMealsDashboard-Cont-Filters-Price">
            <h2 className="Filters-Title">{props.item.name}</h2>
            <div className="Filters-Container">
                <Slider
                    min={props.item.start}
                    max={props.item.end}
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