import React from 'react'
import MealType from '../MealType/MealType'
import Price from '../Price/Price'
import Chef from '../Chef/Chef'
import CuisineType from '../CuisineType/CuisineType'
import Item from '../../Meals/Item'
import deleteIcon from '../../../assets/images/delete.svg'
import './SearchMealsDashboard.scss'

let _ = require('lodash')

class SearchMealsDashboard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            mealType: [],
            cuisineType: [],
            chef: [],
            currentDelete: ""
        }
    }

    toggleChange = (obj) => {
        this.setState(obj)
    }

    clearFilterMeal = (item) => {
        this.setState({
            currentDelete: item
        })
    }

    render() {
        let mealsType = <></>
        let cuisineType = <></>
        let chef = <></>

        if (!_.isEmpty(this.state.mealType)) {
            mealsType = <div className="Filter-Result">
                <p className="Filter-Result_content">Meal Type:</p>
                <p className="Filter-Result_value">{this.state.mealType.map(item => (
                    <span key={item}>{item} <img onClick={() => this.clearFilterMeal(item)} src={deleteIcon} /> </span>
                ))}</p>
            </div>
        }
        if (!_.isEmpty(this.state.cuisineType)) {
            cuisineType = <div className="Filter-Result">
                <p className="Filter-Result_content">Cuisine Type:</p>
                <p className="Filter-Result_value">{this.state.cuisineType.map(item => (
                    <span key={item}>{item} <img onClick={() => this.clearFilterMeal(item)} src={deleteIcon} /> </span>
                ))}</p>
            </div>
        }
        if (!_.isEmpty(this.state.chef)) {
            chef = <div className="Filter-Result">
                <p className="Filter-Result_content">Chef Type:</p>
                <p className="Filter-Result_value">{this.state.chef.map(item => (
                    <span key={item}>{item} <img onClick={() => this.clearFilterMeal(item)} src={deleteIcon} /> </span>
                ))}</p>
            </div>
        }

        if (this.state.currentDelete != "") {
            this.setState({
                currentDelete: ""
            })
        }

        return (
            <div className="SearchMealsDashboard">
                <div className="SearchMealsDashboard-Cont innerWrap">
                    <div className="SearchMealsDashboard-Cont-Filters">
                        <div className="SearchMealsDashboard-Cont-Filters-Heading">
                            <p className="SearchMealsDashboard-Cont-Filters-Heading-1">Filters</p>
                            <p className="SearchMealsDashboard-Cont-Filters-Heading-2"><img src={deleteIcon} /> Clear all </p>
                        </div>
                        <MealType
                            toggleChange={this.toggleChange}
                            currentDelete={this.state.currentDelete} />
                        <Price toggleChange={this.toggleChange} />
                        <Chef
                            toggleChange={this.toggleChange}
                            currentDelete={this.state.currentDelete} />
                        <CuisineType
                            toggleChange={this.toggleChange}
                            currentDelete={this.state.currentDelete} />
                    </div>
                    <div className="SearchMealsDashboard-Cont-Complete">
                        <div className="SearchMealsDashboard-Cont-Filt">
                            {mealsType}
                            {cuisineType}
                            {chef}
                        </div>
                        <div className="SearchMealsDashboard-Cont-Wrapper">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => <Item key={id} id={id} />)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchMealsDashboard