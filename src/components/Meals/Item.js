import React from 'react'
import backImg from '../../assets/images/Img (1).png'
import backImg1 from '../../assets/images/Img (2).png'
import backImg2 from '../../assets/images/Img (3).png'
import backImg3 from '../../assets/images/Img (4).png'
import IconPapper from '../../assets/images/Union.svg'
import favIcon from '../../assets/images/Favorite.svg'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Item.scss'
import { addToCard } from '../../action/Action'
const _ = require("lodash");


class Item extends React.Component {

    addToCard = () => {
        const obj = {
            id: 4,
            title: 'Pamidorov Dzvadzex',
            context: 'Dzu Pamidor'
        }
        this.props.fetchItemsToCard(obj)
    }

    render() {
        let img
        switch (this.props.id) {
            case 1:
                img = backImg
                break;
            case 2:
                img = backImg1
                break;
            case 3:
                img = backImg2
                break;
            case 4:
                img = backImg3
                break;
            case 5:
                img = backImg
                break;
            case 6:
                img = backImg1
                break;
            case 7:
                img = backImg2
                break;
            case 8:
                img = backImg3
                break;

            default:
                break;
        }

        return (
            <section className="Meals-Item item">
                <NavLink className="navLink" to={{
                    pathname: `${process.env.PUBLIC_URL}/item/:id/${this.props.id}`
                }}>
                    <div className="Meals-Item_img">
                        <img className="Meals-Item_img_cover" src={img} />
                        <img className="Meals-Item_img_favIcon" src={favIcon} />
                    </div>
                    <div className="Meals-Item-Cont">
                        <div className="Meals-Item-Cont_title">
                            <h1>Grilled Steak & Bacon Kale Salad</h1>
                            <div className="Meals-Item-Cont_title_img">
                                <img src={IconPapper} />
                            </div>
                        </div>
                        <p className="Meals-Item-Cont_context">Tender grilled steak over a sauteed kale, bacon & roasted sweet potato salad. Served w/ apple cider vinaigret...</p>
                        <div className="Meals-Item-Cont_ingredients">
                            <div className="Meals-Item-Cont_ingredients_cal">
                                <p className="Meals-Item-Cont_ingredients_count">245</p>
                                <p className="Meals-Item-Cont_ingredients_cat">Calories</p>
                            </div>
                            <div className="Meals-Item-Cont_ingredients_wrapper">
                                <div className="Meals-Item-Cont_ingredients_fat">
                                    <p className="Meals-Item-Cont_ingredients_count">16g</p>
                                    <p className="Meals-Item-Cont_ingredients_cat">Fat</p>
                                </div>
                                <div className="Meals-Item-Cont_ingredients_carbs">
                                    <p className="Meals-Item-Cont_ingredients_count">22g</p>
                                    <p className="Meals-Item-Cont_ingredients_cat">N.Carbs</p>
                                </div>
                                <div className="Meals-Item-Cont_ingredients_protein">
                                    <p className="Meals-Item-Cont_ingredients_count">34g</p>
                                    <p className="Meals-Item-Cont_ingredients_cat">Protein</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <div className="Meals-Item-Order">
                    <p className="Meals-Item-Order_price">$14.52</p>
                    <p onClick={this.addToCard} className="Meals-Item-Order_add">Add to Order</p>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItemsToCard: data => dispatch(addToCard(data))
    }
}

export default connect(null, mapDispatchToProps)(Item)