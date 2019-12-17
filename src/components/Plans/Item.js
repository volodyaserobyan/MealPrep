import React from 'react'
import group1 from '../../assets/images/Group 1.svg'
import vectorGreen from '../../assets/images/VectorGreen.svg'

import './Item.scss'

class Item extends React.Component {

    render() {
        return (
            <section className="Plans-Item">
                <div className="Plans-Item-Cont">
                    <div className="Plans-Item-Cont_title">
                        <img src={group1} alt="" />
                        <h1>Classic</h1>
                    </div>
                    <div className="Plans-Item-Cont_price">
                        <p className="Plans-Item-Cont_price_context">Starting at</p>
                        <div className="Plans-Item-Cont_price_amount">
                            <h1>$99</h1>
                            <p>/ week</p>
                        </div>
                    </div>
                    <div className="Plans-Item-Cont_context">
                        <div className="Plans-Item-Cont_context_gal"><img src={vectorGreen} /><p>Velit minim amet minim</p></div>
                        <div className="Plans-Item-Cont_context_gal"><img src={vectorGreen} /><p>Pariatur pariatur culpa qui</p></div>
                        <div className="Plans-Item-Cont_context_gal"><img src={vectorGreen} /><p>Minim veniam sunt cupidatat</p></div>
                        <div className="Plans-Item-Cont_context_gal"><img src={vectorGreen} /><p>Cillum tempor esse Lorem</p></div>
                    </div>
                    <button className="Plans-Item-Cont_button">SELECT</button>
                </div>
            </section>
        )
    }
}

export default Item