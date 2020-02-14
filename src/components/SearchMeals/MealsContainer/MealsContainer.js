import React from 'react'
import Item from '../../Meals/Item'
import { connect } from 'react-redux'
import FiltersResult from '../FiltersResult/FiltersResult'
import './MealsContainer.scss'
let _ = require('lodash')

class MealsContainer extends React.Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         bool: false
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     if(!_.isEqual(this.props, nextProps)) {
    //         if(!_.isEqual(this.props.handleFiltersReducerHandle, nextProps.handleFiltersReducerHandle)) {
    //             this.setState({
    //                 bool: true
    //             })
    //         }
    //     }
    // }

    render() {
        return (
            <div className="SearchMealsDashboard-Cont-Complete">
                <div className="SearchMealsDashboard-Cont-Filt">
                    {this.props.handleFiltersReducerHandle.map((item, i) => <FiltersResult key={i} item={item} />)}
                </div>
                <div className="SearchMealsDashboard-Cont-Wrapper">
                    {this.props.mealsArr.map((item, id) => <Item key={item._id}
                        id={id}
                        item={item} />)}
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
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealsContainer)