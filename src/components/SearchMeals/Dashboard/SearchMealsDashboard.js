import React from 'react'
import MealType from '../MealType/MealType'
import Price from '../Price/Price'
import Chef from '../Chef/Chef'
import CuisineType from '../CuisineType/CuisineType'
import Item from '../../Meals/Item'
import Filters from '../Filters/Filters'
import deleteIcon from '../../../assets/images/delete.svg'
import Loader from 'react-loader-spinner'
import SearchIcon from '../../../assets/images/SearchIcon.svg'
import { connect } from 'react-redux'
import './SearchMealsDashboard.scss'
import { getFiltersFromDB, addFiltersToDB, addRangeToDB, getRangeFromDB } from '../../../action/Action'

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
            clearAll: "",
            isOpen: false,
            getFilters: false
        }

        this.classNameHamburger = ""
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
            currentDelete: 1
        })
    }

    componentDidMount() {
        // const filterMeals = {
        //     name: 'price',
        //     start: 0,
        //     end: 1000
        // }
        // this.props.addFiltersToFB('https://andoghevian-chef-app.herokuapp.com/filters/select', filterMeals)
        this.props.getFiltersFromDB('https://andoghevian-chef-app.herokuapp.com/filters')
        // this.props.addRangeToDB('https://andoghevian-chef-app.herokuapp.com/filters/range', filterMeals)
        // this.props.getRangeFromDb('https://andoghevian-chef-app.herokuapp.com/filters/range')
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            if (!_.isEmpty(nextProps.filtersReducerGET)) {
                this.setState({
                    getFilters: true
                })
            }
        }
    }

    clearAll = () => {
        this.setState({
            clearAll: 'clear'
        })
    }

    handleClick = () => {
        if (!this.state.isOpen) {
            this.setState({
                isOpen: true
            })
            this.classNameHamburger = "openFilter"
        }
        else {
            this.setState({
                isOpen: false
            })

            this.classNameHamburger = ""
        }
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

        if (!this.state.getFilters) {
            return (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            );
        }

        return (<>
            <div className="SearchMeals">
                <h1 className="SearchMeals-Title">Search Your Meals</h1>
                <div className="SearchMeals-Cont">
                    <input className="SearchMeals-Cont-Search" placeholder={'Search'} />
                    <div className="SearchMeals-Cont-Icon">
                        <img src={SearchIcon} />
                    </div>
                </div>
            </div>
            <div className="SearchMealsDashboard">
                <div className="SearchMealsDashboard-Cont innerWrap">
                    <div onClick={this.handleClick} className={`filters ${this.classNameHamburger}`}>
                        <i className="fas fa-filter"></i>
                    </div>
                    <div className={`SearchMealsDashboard-Cont-Filters ${this.classNameHamburger}`}>
                        <div className="SearchMealsDashboard-Cont-Filters-Heading">
                            <p className="SearchMealsDashboard-Cont-Filters-Heading-1">Filters</p>
                            <p onClick={this.clearAll} className="SearchMealsDashboard-Cont-Filters-Heading-2"><img src={deleteIcon} /> Clear all </p>
                        </div>
                        {this.props.filtersReducerGET.filters.selects.map((item, id) =>
                            <Filters key={id} item={item} />
                        )}
                        {this.props.filtersReducerGET.filters.ranges.map((item, id) => <Price key={id} item={item} />)}
                        {/* <MealType
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
                            clearAll={this.state.clearAll} /> */}
                    </div>
                    <div className="SearchMealsDashboard-Cont-Complete">
                        {(this.state.price.length != 0 || this.state.mealType.length != 0 || this.state.chef.length != 0 || this.state.cuisineType.length != 0) ? <p>Found 49 of 307</p> : <></>}
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
        </>
        )
    }
}

const mapStateToProps = state => {
    return {
        filtersReducerGET: state.filtersReducer.getFilters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFiltersFromDB: url => dispatch(getFiltersFromDB(url)),
        addFiltersToFB: (url, data) => dispatch(addFiltersToDB(url, data)),
        addRangeToDB: (url, data) => dispatch(addRangeToDB(url, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMealsDashboard)