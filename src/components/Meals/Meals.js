import React from 'react'
import './Meals.scss'
import OwlCarousel from 'react-owl-carousel';
import Item from './Item'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Meals extends React.Component {

    state = {
        responsive: {
            0: {
                items: 1,
            },
            588: {
                items: 2,
            },
            758: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        },
        isAll: false
    }

    render() {

        return (
            <section id="meals" className="Meals">
                <div className="Meals-Cont innerWrap">
                    <h1 className="Meals-Cont-Title">Meals</h1>
                    <OwlCarousel
                        className="owl-theme"
                        items={4}
                        dots={false}
                        nav
                        responsiveClass={true}
                        responsive={this.state.responsive}
                    >
                        {this.props.mealsItemReducerGET.meals.map((item, id) => <Item key={item._id} id={id} item={item} />)}
                    </OwlCarousel>
                    <NavLink to={{
                                    pathname: `${process.env.PUBLIC_URL}/meals`
                                }}>
                        <button className="Meals-Cont_allbutton">View Meals</button>
                    </NavLink>
                </div>
            </section >
        )
    }
}

const mapStateToProps = state => {
    return {
        mealsItemReducerGET: state.mealsItemReducer.getMeals
    }
}

export default connect(mapStateToProps)(Meals)