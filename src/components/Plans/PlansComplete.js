import React from 'react'
import Item from './Item'
import './PlansComplete.scss'

class PlansComplete extends React.Component {

    render() {
        return (
            <div className="PlansComplete">
                <div className="PlansComplete-Cont innerWrap">
                    <div className="PlansComplete-Cont-Title">
                        <h1>Choose a Meal Plan</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci molestie gravida nam dapibus. Pharetra aenean id feugiat nulla odio platea.</p>
                    </div>
                    <div className="PlansComplete-Cont-Collector">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(id => <Item id={id} />)}
                    </div>

                </div>
            </div>
        )
    }
}

export default PlansComplete