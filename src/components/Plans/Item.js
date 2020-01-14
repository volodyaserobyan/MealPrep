import React from 'react'
import ItemCover1 from '../../assets/images/Plans-Img.png'
import ItemCover2 from '../../assets/images/Plans-Img (1).png'
import ItemCover3 from '../../assets/images/Plans-Img (2).png'
import ItemCover4 from '../../assets/images/Plans-Img (3).png'
import vectorGreen from '../../assets/images/VectorGreen.svg'

import './Item.scss'

class Item extends React.Component {

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
        return (
            <section className="Plans-Item">
                <div className="Plans-Item-Img">
                    <img src={img} alt="" />
                </div>
                <div className="Plans-Item-Cont">
                    <h1 className="Plans-Item-Cont_number">4</h1>
                    <h1 className="Plans-Item-Cont_desc">Meals / Week</h1>
                    <p>$12 / Meal • $80 / Week</p>

                    <button className="Plans-Item-Cont_button">SELECT THIS PLAN</button>
                </div>
            </section>
        )
    }
}

export default Item