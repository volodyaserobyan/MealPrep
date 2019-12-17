import React from 'react'
import rightArrow from '../../assets/images/VectorWhite.svg'
import Item from './Item'
import { Link } from 'react-router-dom'

import './Plans.scss'

class Plans extends React.Component {

    render() {
        return (
            <>
                <div className="Plans-Orange">
                    <div className="Plans-Orange-Cont innerWrap">
                        <h1 className="Plans-Orange-Cont_title">Meal Plans</h1>
                        <Link to={{
                            pathname: `${process.env.PUBLIC_URL}/plans`
                        }}><div><p className="Plans-Orange-Cont_view">View all Plans</p> <img src={rightArrow} /></div></Link>
                    </div>
                </div>
                <div className="Plans-Usual">
                    <div className="Plans-Usual-Cont innerWrap">
                        {[1, 2, 3, 4].map(id => <Item key={id} id={id} />)}
                    </div>
                </div>
            </>
        )
    }
}

export default Plans