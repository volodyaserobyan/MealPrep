import React from 'react'
import Item from './Item'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { getTestimonials } from '../../action/Action'
import { TESTIMONIALSURL } from '../../const/ConstUrls'
import plusVector from '../../assets/images/plusVectorr.png'
import { NavLink } from 'react-router-dom'
import './ClientsComplete.scss'

class ClientsComplete extends React.Component {

    constructor(props) {
        super(props)

        this.count = 0
    }

    handlePageChangePagination = () => {
        this.count = this.count + 1
        this.props.getTestimonial(`${TESTIMONIALSURL}?limit=6&offset=${this.count * 6}`)
    }

    render() {
        console.log(this.props.testimonialsReducerGET, this.props.testimonialsReducerTOTAL, '.')
        return (
            <div className="ClientsComplete">
                <div className="ClientsComplete-Cont">
                    <div className="ClientsComplete-Cont-Title">
                        <h1>Testimonials</h1>
                        <NavLink to={{
                            pathname: `${process.env.PUBLIC_URL}/addreview`
                        }}>
                            <p><img src={plusVector} alt='' /> Add New</p>
                        </NavLink>
                    </div>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.handlePageChangePagination}
                        hasMore={this.props.testimonialsReducerGET.length < this.props.testimonialsReducerTOTAL}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                    >
                        {this.props.testimonialsReducerGET.map(item => <Item key={item._id} item={item} />)}
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        testimonialsReducerGET: state.testimonialsReducer.getTestimonials,
        testimonialsReducerTOTAL: state.testimonialsReducer.count,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTestimonial: url => dispatch(getTestimonials(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientsComplete)