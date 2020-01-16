import React from 'react'
import ItemCover1 from '../../assets/images/Plans-Img.png'
import ItemCover2 from '../../assets/images/Plans-Img (1).png'
import ItemCover3 from '../../assets/images/Plans-Img (2).png'
import ItemCover4 from '../../assets/images/Plans-Img (3).png'
import { Redirect } from 'react-router-dom';

import './Item.scss'

class Item extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isAuth: false,
            isDashboard: false
        }
    }

    handleClick = e => {
        e.preventDefault()

        if (this.props.isDashboard) {
            this.setState({
                isDashboard: true
            })
        } else {
            this.setState({
                isAuth: true
            })
        }
    }

    render() {
        let img = <></>
        switch (this.props.id) {
            case 1: {
                img = ItemCover1
                break;
            }
            case 2: {
                img = ItemCover2
                break
            }
            case 3: {
                img = ItemCover3
                break
            }
            case 4: {
                img = ItemCover4
                break
            }
            default: {

            }
        }
        if (this.state.isAuth) {
            return (
                <Redirect to={{
                    pathname: `${process.env.PUBLIC_URL}/selectplans/signup`
                }} />
            )
        }

        if (this.state.isDashboard) {
            return (
                <Redirect to={{
                    pathname: `${process.env.PUBLIC_URL}/selectplans/menu`
                }} />
            )
        }
        return (
            <section className="Plans-Item">
                <div className="Plans-Item-Img">
                    <img src={img} alt="" />
                </div>
                <div className="Plans-Item-Cont">
                    <h1 className="Plans-Item-Cont_number">4</h1>
                    <h1 className="Plans-Item-Cont_desc">Meals / Week</h1>
                    <p>$12 / Meal • $80 / Week</p>

                    <button onClick={this.handleClick} className="Plans-Item-Cont_button">SELECT THIS PLAN</button>
                </div>
            </section>
        )
    }
}

export default Item