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
            price: [],
            currentDelete: "",
            clearAll: ""
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

    clearPrice = () => {
        this.setState({
            currentDelete: 0
        })
    }

    clearAll = () => {
        this.setState({
            clearAll: 'clear'
        })
    }

    render() {
        let mealsType = <></>
        let cuisineType = <></>
        let chef = <></>
        let price = <> </>

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
        if (!_.isEmpty(this.state.price)) {
            price = <div className="Filter-Result">
                <p className="Filter-Result_content">Price:</p>
                <p className="Filter-Result_value">${this.state.price[0]}-${this.state.price[1]} <img onClick={this.clearPrice} src={deleteIcon} /></p>
            </div>
        }

        if (this.state.currentDelete != "" || this.state.clearAll != "") {
            this.setState({
                currentDelete: "",
                clearAll: ""
            })
        }

        return (
            <div className="SearchMealsDashboard">
                <div className="SearchMealsDashboard-Cont innerWrap">
                    <div className="SearchMealsDashboard-Cont-Filters">
                        <div className="SearchMealsDashboard-Cont-Filters-Heading">
                            <p className="SearchMealsDashboard-Cont-Filters-Heading-1">Filters</p>
                            <p onClick={this.clearAll} className="SearchMealsDashboard-Cont-Filters-Heading-2"><img src={deleteIcon} /> Clear all </p>
                        </div>
                        <MealType
                            toggleChange={this.toggleChange}
                            currentDelete={this.state.currentDelete}
                            clearAll={this.state.clearAll} />
                        <Price
                            toggleChange={this.toggleChange}
                            currentDelete={this.state.currentDelete}
                            clearAll={this.state.clearAll} />
                        <Chef
                            toggleChange={this.toggleChange}
                            currentDelete={this.state.currentDelete}
                            clearAll={this.state.clearAll} />
                        <CuisineType
                            toggleChange={this.toggleChange}
                            currentDelete={this.state.currentDelete}
                            clearAll={this.state.clearAll} />
                    </div>
                    <div className="SearchMealsDashboard-Cont-Complete">
        {(this.state.price.length != 0 || this.state.mealType.length != 0 || this.state.chef.length != 0 || this.state.cuisineType.length != 0) ? <p>Found 49 of 307</p> : <></> }
                        <div className="SearchMealsDashboard-Cont-Filt">
                            {mealsType}
                            {cuisineType}
                            {chef}
                            {price}
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