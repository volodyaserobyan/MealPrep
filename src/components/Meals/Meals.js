import React from 'react'
import './Meals.scss'
import OwlCarousel from 'react-owl-carousel';
import Item from './Item'
import { NavLink } from 'react-router-dom'
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
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(id => <Item key={id} id={id} />)}
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

export default Meals