import React from 'react'
import img1 from '../../../assets/images/Ellipse 1.svg'
import img2 from '../../../assets/images/Ellipse 1 (1).svg'
import img3 from '../../../assets/images/Ellipse 1 (2).svg'

import './Items.scss'

class Item extends React.Component {

    render() {
        let img = <></>
        let title = <></>
        let context = <></>
        switch (this.props.id) {
            case 1:
                img = <img src={img1} />
                title= <h1 className="HowItWorks-Item_title">Choose your meals</h1>
                context= <p className="HowItWorks-Item_context">You view a list of all meals from top chefs in your areas.</p>
                break;
            case 2:
                img = <img src={img2} />
                title= <h1 className="HowItWorks-Item_title">We cook fresh meals</h1>
                context= <p className="HowItWorks-Item_context">Our chefs follow highest standards to deliver freshly cooked meals on time.</p>
                break;
            case 3:
                img = <img src={img3} />
                title= <h1 className="HowItWorks-Item_title">Just heat, eat and enjoy</h1>
                context= <p className="HowItWorks-Item_context">The delivery staff makes it sure to deliver online at your doorstep.</p>
                break;
            default:
                break;
        }
        return (
            <section className="HowItWorks-Item">
                {/* <div className="HowItWorks-Item_img">
                </div> */}
                {img}
                {title}
                {context}
            </section>
        )
    }
}

export default Item
