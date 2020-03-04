import React from 'react'
import { connect } from 'react-redux'
import deleteIcon from '../../../assets/images/delete.svg'
import './FilterResults.scss'
import { removeItemFromArr, getMealsFromDB } from '../../../action/Action'
import { GETMEALSURL } from '../../../const/ConstUrls'

class FiltersResult extends React.Component {

    removeItemCall = item => {
        this.props.removeItem(item)
        if (this.props.handleFiltersReducerHandle.length != 0) {
            setTimeout(() => {
                const filt = {
                    selects: this.props.handleFiltersReducerHandle
                }
                const filteredByJson = JSON.stringify(filt)
                this.props.getMealsFromDB(`${GETMEALSURL}?limit=9&offset=0&filteredBy=${filteredByJson}`)

            }, 200);
        }
        else {
            this.props.getMealsFromDB(`${GETMEALSURL}?limit=9&offset=0`)
        }
    }

    render() {
        return (
            <div className="Filter-Result">
                <p className="Filter-Result_content">{this.props.item.name}</p>
                <p className="Filter-Result_value">{this.props.item.values.length != 0 && this.props.item.values.map(item => (
                    <span key={item}>{item} <img onClick={() => this.removeItemCall(item)} src={deleteIcon} /> </span>
                ))}</p>
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
        removeItem: item => dispatch(removeItemFromArr(item)),
        getMealsFromDB: url => dispatch(getMealsFromDB(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersResult)