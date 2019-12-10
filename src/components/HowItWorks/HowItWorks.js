import React from 'react'
import Items from './Items/Items'

import './HowItWorks.scss'

class HowItWorks extends React.Component {

    render() {
        return (
            <section className="HowItWorks">
                <div className="HowItWorks-Cont innerWrap">
                    <h1 className="HowItWorks-Cont-Title">How it works</h1>
                    <div className="HowItWorks-Cont_items">
                        {[1, 2, 3].map(id => <Items id={id} key={id} />)}
                    </div>
                </div>
            </section>
        )
    }
}

export default HowItWorks