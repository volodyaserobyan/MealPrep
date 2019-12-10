import React from 'react'
import MealType from '../MealType/MealType'
import Price from '../Price/Price'
import Chef from '../Chef/Chef'
import CuisineType from '../CuisineType/CuisineType'
import Item from '../../Meals/Item'
import './SearchMealsDashboard.scss'

class SearchMealsDashboard extends React.Component {

    render() {
        return (
            <div className="SearchMealsDashboard">
                <div className="SearchMealsDashboard-Cont innerWrap">
                    <div className="SearchMealsDashboard-Cont-Filters">
                        <div className="SearchMealsDashboard-Cont-Filters-Heading">
                            <p className="SearchMealsDashboard-Cont-Filters-Heading-1">Filters</p>
                            <p className="SearchMealsDashboard-Cont-Filters-Heading-2">Clear all</p>
                        </div>
                        <MealType />
                        <Price />
                        <Chef />
                        <CuisineType />
                    </div>
                    <div className="SearchMealsDashboard-Cont-Wrapper">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => <Item id={id} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchMealsDashboard