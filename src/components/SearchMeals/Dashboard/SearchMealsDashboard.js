import React from 'react'
import Price from '../Price/Price'
import MealsContainer from '../MealsContainer/MealsContainer'
import Filters from '../Filters/Filters'
import deleteIcon from '../../../assets/images/delete.svg'
import Loader from 'react-loader-spinner'
import SearchIcon from '../../../assets/images/SearchIcon.svg'
import { connect } from 'react-redux'
import './SearchMealsDashboard.scss'
import {
    getFiltersFromDB,
    getMealsFromDB,
    resetMeals
} from '../../../action/Action'
import {
    FILTERSURL,
    GETMEALSURL
} from '../../../const/ConstUrls'

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

    componentDidMount() {
        if (this.props.filtersReducerGET == undefined) {
            this.props.getFiltersFromDB(FILTERSURL)
        }
        else {
            this.setState({
                getFilters: true
            })
        }
        if (_.isEmpty(this.props.mealsItemReducerGET)) {
            this.props.getMealsFromDB(`${GETMEALSURL}?limit=9&offset=0`)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            if (!_.isEmpty(nextProps.filtersReducerGET) && !_.isEmpty(nextProps.mealsItemReducerGET)) {
                this.setState({
                    getFilters: true
                })
            }
        }
    }

    componentWillUnmount() {
        this.props.resetMealsAll()
    }

    render() {

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
                            <Filters key={id}
                                item={item}
                                toggleChange={this.toggleChange}
                                currentDelete={this.state.currentDelete}
                                clearAll={this.state.clearAll} />
                        )}
                        {this.props.filtersReducerGET.filters.ranges.map((item, id) => <Price key={id} item={item} />)}
                    </div>
                    <MealsContainer total={this.props.mealsItemReducerTotal} meals={_.isEmpty(this.props.mealsItemRedfucerFilter) ?
                        this.props.mealsItemReducerGET : this.props.mealsItemRedfucerFilter} />
                </div>
            </div>
        </>
        )
    }
}

const mapStateToProps = state => {
    return {
        filtersReducerGET: state.filtersReducer.getFilters,
        mealsItemReducerGET: state.mealsItemReducer.getMeals,
        mealsItemRedfucerFilter: state.mealsItemReducer.getMealsFilter,
        mealsItemReducerTotal: state.mealsItemReducer.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFiltersFromDB: url => dispatch(getFiltersFromDB(url)),
        getMealsFromDB: url => dispatch(getMealsFromDB(url)),
        resetMealsAll: () => dispatch(resetMeals())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMealsDashboard)