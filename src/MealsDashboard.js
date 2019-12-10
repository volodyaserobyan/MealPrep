import React from 'react'
import SearchMeals from './components/SearchMeals/SearchMeals'
import SearchMealsDashboard from './components/SearchMeals/Dashboard/SearchMealsDashboard'

class MealsDashboard extends React.Component {

    render() {
        return (
            <>
                <SearchMeals />
                <SearchMealsDashboard />
            </>
        )
    }
}

export default MealsDashboard