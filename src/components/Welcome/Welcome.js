import React from 'react'
import './Welcome.scss'

class Welcome extends React.Component {

    render() {
        return (
            <section id="welcome" className="Welcome">
                <div className="Welcome-Content">
                    <h1>Ready Meals At Your Door Step</h1>
                    <p>We'll cook and deliver super delicious food to your doorstep</p>
                    <a href="#meals">VIEW MEALS</a>
                </div>
            </section>
        )
    }
}

export default Welcome