import React from 'react'
import Checkbox from '../../Forms/CheckBox'

import './MealType.scss'

class MealType extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            checkedItemsMealType: new Map()
        };

        this.checkboxes = [
            {
                label: "low-carb",
                key: "checkBox1",
                name: "Low Carb"
            },
            {
                label: "high-carb",
                key: "checkBox2",
                name: "High Carb"
            },
            {
                label: "salads",
                key: "checkBox3",
                name: "Salads"
            },
            {
                label: "budget-friendly-options",
                key: "checkBox4",
                name: "Budget Friendly Options"
            }
        ];
    }

    handleChangeChk = (e) => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({
            checkedItemsMealType: prevState.checkedItemsMealType.set(item, isChecked)
        }));
    }

    render() {

        const checkBoxesToRender = this.checkboxes.map(item => {
            return (
                <label key={item.key}>
                    <Checkbox
                        name={item.name}
                        checked={this.state.checkedItemsMealType.get(item.name)}
                        onChange={this.handleChangeChk}
                        value={this.state.checkedItemsMealType} />
                    <p>{item.name}</p>
                </label>
            )
        })

        return (
            <div className="SearchMealsDashboard-Cont-Filters-MealType" >
                <h2 className="Filters-Title">Meal Type</h2>
                <div className="Filters-Container">
                    {checkBoxesToRender}
                </div>
            </div>
        )
    }
}

export default MealType