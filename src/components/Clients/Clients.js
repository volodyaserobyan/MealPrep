import React from 'react'
import Item from './Item'
import OwlCarousel from 'react-owl-carousel';
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
        return (
            <section className="Clients">
                <div className="Clients-Cont innerWrap">
                    <h1 className="Clients-Cont-Title">What our clients say</h1>
                    <div className="Clients-Cont-Item">
                        <OwlCarousel
                            className="owl-theme"
                            items={3}
                            dots={false}
                            nav
                            responsiveClass={true}
                            responsive={this.state.responsive}
                        >
                            {[1, 2, 3, 4, 5].map(id => <Item key={id} />)}
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        )
    }
}

export default Clients