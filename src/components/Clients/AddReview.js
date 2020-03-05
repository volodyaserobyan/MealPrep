import React from 'react'
import disabledStar from '../../assets/images/disabledStar.png'
import activeStar from '../../assets/images/VectorStar.png'
import StarRatings from 'react-star-ratings';
import { connect } from 'react-redux'
import { postTestimonials } from '../../action/Action'
import { POSTTESTIMONIALSURL } from '../../const/ConstUrls'
import './AddReview.scss'
let _ = require('lodash')

class AddReview extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            review: '',
            rating: 0
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        const info = {
            text: this.state.review,
            rating: this.state.rating
        }

        this.props.postTestimonials(POSTTESTIMONIALSURL, info)
    }

    changeRating = newRating => {
        this.setState({
            rating: newRating
        });
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            if (!_.isEmpty(nextProps.testimonialsReducerPOST) && nextProps.testimonialsReducerPOST.message) {
                alert('Success')
            }
        }
    }

    render() {
        return (
            <section className='AddReview'>
                <div className='AddReview-Cont innerWrap'>
                    <h1>Add a review</h1>
                    <form onSubmit={this.handleSubmit} className='AddReview-Cont-Form'>
                        <div className='AddReview-Cont-Form-User'>
                            <div>
                                <p>Full Name</p>
                                <input value={localStorage.getItem('userName')} disabled={true} className='AddReview-Cont-Form-User-Simp' />
                            </div>
                            <div>
                                <p>Your Review</p>
                                <textarea value={this.state.review} onChange={e => this.setState({ review: e.target.value })} name='review' />
                            </div>

                            <input type='submit' className='AddReview-Cont-Form-User-Submit' />
                        </div>
                        <div className='AddReview-Cont-Form-Rating'>
                            <p>Rating</p>
                            <div className='AddReview-Cont-Form-Rating-Star'>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="orange"
                                    changeRating={this.changeRating}
                                    numberOfStars={4}
                                    name='rating'
                                />
                            </div>
                            <h1>Good</h1>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        testimonialsReducerPOST: state.testimonialsReducer.postTestimonials
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postTestimonials: (url, info) => dispatch(postTestimonials(url, info))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReview)