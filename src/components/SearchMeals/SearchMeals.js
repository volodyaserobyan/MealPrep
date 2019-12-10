import React from 'react'
import SearchIcon from '../../assets/images/SearchIcon.svg'
import './SearchMeals.scss'

class SearchMeals extends React.Component {

    render() {
        return (
            <div className="SearchMeals">
                <h1 className="SearchMeals-Title">Search Your Meals</h1>
                <div className="SearchMeals-Cont">
                    <input className="SearchMeals-Cont-Search" placeholder={'Search'} />
                    <div className="SearchMeals-Cont-Icon">
                        <img src={SearchIcon} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchMeals