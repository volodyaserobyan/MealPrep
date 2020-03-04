import React from 'react'
import Item from './Item'
import OwlCarousel from 'react-owl-carousel';
import { connect } from 'react-redux'
import './Clients.scss'

class Clients extends React.Component {

    state = {
        responsive: {
            0: {
                items: 1,
            },
            568: {
                items: 2,
            },
            992: {
                items: 3,
            }
        },
        isAll: false
    }

    render() {
        console.log(this.props.testimonialsReducerGET, 'gfhgfhgf')
        return (
            <section className="Clients">
                <div className="Clients-Cont innerWrap">
                    <div className="Clients-Cont-Title">
                        <h1>What our clients say</h1>
                    </div>
                    <div className="Clients-Cont-Item">
                        <OwlCarousel
                            className="owl-theme"
                            items={3}
                            dots={false}
                            nav
                            responsiveClass={true}
                            responsive={this.state.responsive}
                        >
                            {this.props.testimonialsReducerGET.length !== 0 &&
                                this.props.testimonialsReducerGET[0] !== undefined
                                && this.props.testimonialsReducerGET.map(item => <Item key={item._id} item={item} />)}
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        testimonialsReducerGET: state.testimonialsReducer.getTestimonials
    }
}

export default connect(mapStateToProps)(Clients)