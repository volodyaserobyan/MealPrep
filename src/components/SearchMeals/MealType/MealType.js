import React from 'react'
import Checkbox from '../../Forms/CheckBox'

import './MealType.scss'

let _ = require('lodash')

class MealType extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            checkedItemsMealType: new Map(),
            checkedItemsArr: []
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

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {

            if (nextProps.clearAll == 'clear') {
                this.setState({
                    checkedItemsArr: [],
                    checkedItemsMealType: new Map()
                })
            }
            else {
                this.setState(prevState => ({
                    checkedItemsArr: this.removeItemfromArr(nextProps.currentDelete, this.state.checkedItemsArr),
                    checkedItemsMealType: prevState.checkedItemsMealType.set(nextProps.currentDelete, false)
                }))
            }
            setTimeout(() => {
                this.props.toggleChange({
                    mealType: this.state.checkedItemsArr
                })
            }, 0);
        }
    }

    removeItemfromArr = (item, arr) => {
        let newArr = [...arr]
        let index = newArr.indexOf(item)
        if (index !== -1) {
            newArr.splice(index, 1)
        }
        return newArr
    }

    handleChangeChk = (e) => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({
            checkedItemsMealType: prevState.checkedItemsMealType.set(item, isChecked),
        }));
        if (isChecked) {
            this.setState(prevState => ({
                checkedItemsArr: [...prevState.checkedItemsArr, item]
            }))
        }
        else {
            this.setState({
                checkedItemsArr: this.removeItemfromArr(item, this.state.checkedItemsArr)
            })
        }
        setTimeout(() => {
            this.props.toggleChange({
                mealType: this.state.checkedItemsArr
            })
        }, 0);
    }

    // componentDidMount() {
    //     this.setState({
    //         checkedItemsMealType: new Map()
    //     })
    // }

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