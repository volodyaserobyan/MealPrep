import React from 'react'
import Item from '../../Meals/Item'
import { connect } from 'react-redux'
import FiltersResult from '../FiltersResult/FiltersResult'
import './MealsContainer.scss'
import { getMealsFromDB } from '../../../action/Action'
import InfiniteScroll from 'react-infinite-scroller'
import { GETMEALSURL } from '../../../const/ConstUrls'
let _ = require('lodash')

class MealsContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            activePage: 1,
            meals: []
        }

        this.x = 0
    }

    handlePageChangePagination = () => {
        this.x = this.x + 1
        if (this.props.handleFiltersReducerHandle.length != 0) {
            setTimeout(() => {
                const filt = {
                    selects: this.props.handleFiltersReducerHandle
                }
                const filteredByJson = JSON.stringify(filt)
                if (this.x * 9 <= this.props.total) {
                    this.props.getMealsFromDB(`${GETMEALSURL}?limit=9&offset=${this.x * 9}&filteredBy=${filteredByJson}`)
                }
                else {
                    this.props.getMealsFromDB(`${GETMEALSURL}&filteredBy=${filteredByJson}`)
                }
            }, 200);
        }
        else {
            if (this.x <= this.props.total) {
                this.props.getMealsFromDB(`${GETMEALSURL}?limit=9&offset=${this.x * 9}`)
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            this.setState({
                meals: nextProps.meals
            })
        }
    }

    render() {
        console.log(this.props.meals, 'gf')
        return (
            <div className="SearchMealsDashboard-Cont-Complete">
                <div className="SearchMealsDashboard-Cont-Filt">
                    {this.props.handleFiltersReducerHandle.length != 0 && this.props.handleFiltersReducerHandle.map((item, i) => <FiltersResult key={i} item={item} />)}
                </div>
                <div className="SearchMealsDashboard-Cont-Wrapper">
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.handlePageChangePagination}
                        hasMore={this.state.meals.length < this.props.total}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                    >
                        {this.state.meals.map((item, id) => <Item key={item._id}
                            id={id}
                            item={item} />)}
                    </InfiniteScroll>
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
        getMealsFromDB: url => dispatch(getMealsFromDB(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealsContainer)