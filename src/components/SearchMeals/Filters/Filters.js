import React from 'react'
import Checkbox from '../../Forms/CheckBox'

// import './MealType/MealType.scss'

let _ = require('lodash')

class Filters extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            checkedItemsMealType: new Map(),
            checkedItemsArr: []
        };
    }

    render() {
        const checkBoxesToRender = this.props.item.valuesEnum.map((item, i) => {
            console.log(item, 'item')
            return (
                <label key={i}>
                    <Checkbox
                        name={item}
                    // checked={this.state.checkedItemsMealType.get(item.name)}
                    // onChange={this.handleChangeChk}
                    // value={this.state.checkedItemsMealType} 
                    />
                    <p>{item}</p>
                </label>
            )
        })

        return (
            <div className="SearchMealsDashboard-Cont-Filters-MealType" >
                <h2 className="Filters-Title">{this.props.item.name}</h2>
                <div className="Filters-Container">
                    {checkBoxesToRender}
                </div>
            </div>
        )
    }
}

export default Filters