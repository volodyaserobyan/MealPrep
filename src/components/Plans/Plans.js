import React from 'react'
import rightArrow from '../../assets/images/VectorWhite.svg'
import Item from './Item'
import { Link } from 'react-router-dom'

import './Plans.scss'

class Plans extends React.Component {

    render() {
        return (
            <>
                <div className="Plans">
                    <div className="Plans-Cont innerWrap">
                        <div className="Plans-Cont-Title">
                            <h1>Choose a Meal Plan</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci molestie gravida nam dapibus. Pharetra aenean id feugiat nulla odio platea.</p>
                        </div>
                        <div className="Plans-Cont-Item">
                            {[1, 2, 3, 4].map(id => <Item isDashboard={this.props.isDashboard} key={id} id={id} />)}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Plans