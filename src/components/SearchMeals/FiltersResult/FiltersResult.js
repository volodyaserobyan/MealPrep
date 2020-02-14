import React from 'react'
import { connect } from 'react-redux'
import deleteIcon from '../../../assets/images/delete.svg'
import './FilterResults.scss'

class FiltersResult extends React.Component {

    render() {
        return (
            <div className="Filter-Result">
                <p className="Filter-Result_content">{this.props.item.name}</p>
                <p className="Filter-Result_value">{this.props.item.values.map(item => (
                    <span key={item}>{item} <img src={deleteIcon} /> </span>
                ))}</p>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(null, mapDispatchToProps)(FiltersResult)