import React from 'react'
import { connect } from 'react-redux'
import Checkbox from '../../Forms/CheckBox'
import { handlingFilters, getMealsFromDB, } from '../../../action/Action'
import { GETMEALSURL } from '../../../const/ConstUrls'

let _ = require('lodash')

class Filters extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            checkedItems: new Map(),
        };

        this.sendObj = {
            name: '',
            valuesEnum: []
        }
    }

    handleChangeChk = (e) => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({
            checkedItems: prevState.checkedItems.set(item, isChecked),
        }))
        this.sendObj = {
            name: this.props.item.name,
            values: [item]
        }
        this.props.handleFilters(this.sendObj)
        if (this.props.handleFiltersReducerHandle != undefined) {
            setTimeout(() => {
                const filt = {
                    selects: this.props.handleFiltersReducerHandle
                }
                const filteredByJson = JSON.stringify(filt)
                this.props.getMealsFromDB(`${GETMEALSURL}?limit=9&offset=0&filteredBy=${filteredByJson}`)
            }, 200);
        }
        // }
        // this.setState(prevState => ({
        //     checkedItems: prevState.checkedItems.set(item, isChecked),
        // }));
        // if (isChecked && this.props.item.name == 'Meal Type') {
        //     this.setState(prevState => ({
        //         checkedItemsArrMeal: [prevState.checkedItemsArrMeal, item]
        //     }))
        // } else if (isChecked && this.props.item.name == 'Cuisine Type') {
        //     this.setState(prevState => ({
        //         checkedItemsArrCuisine: [prevState.checkedItemsArrCuisine, item]
        //     }))
        // }
        // else {
        //     this.setState({
        //         checkedItemsArr: this.removeItemfromArr(item, this.state.checkedItemsArr)
        //     })
        // }
        // setTimeout(() => {
        //     this.props.toggleChange({
        //         mealType: this.state.checkedItemsArr
        //     })
        // }, 0);
    }

    render() {
        const checkBoxesToRender = this.props.item.valuesEnum.map((item, i) => {
            return (
                <label key={i}>
                    <Checkbox
                        name={item}
                        // checked={this.state.checkArr.indexOf(item) != -1}
                        onChange={this.handleChangeChk}
                        value={this.state.checkedItems}
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

const mapStateToProps = state => {
    return {
        handleFiltersReducerHandle: state.handleFiltersReducer.filtersHandle
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleFilters: data => dispatch(handlingFilters(data)),
        getMealsFromDB: url => dispatch(getMealsFromDB(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)