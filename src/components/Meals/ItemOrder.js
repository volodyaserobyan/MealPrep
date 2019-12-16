import React from 'react'
import fbIcon from '../../assets/images/FB-Vector.svg'
import TwitIcon from '../../assets/images/bx_bxl-twitter.svg'
import CopyIcon from '../../assets/images/bx_bx-link.svg'
import FavIcon from '../../assets/images/Fav.svg'
import img from '../../assets/images/ImageBackg.svg'
import ChefImg from '../../assets/images/chef.svg'
import star from '../../assets/images/VectorStar.png'
import './ItemOrder.scss'

class ItemOrder extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    countClick = e => {
        if (e.target.textContent == "+") {
            this.setState(state => ({
                count: state.count + 1
            }))
        }
        else if (this.state.count > 0) {
            this.setState(state => ({
                count: state.count - 1
            }))
        }
    }

    render() {
        return (
            <section className="ItemOrder">
                <div className="ItemOrder-Cont innerWrap">
                    <div className="ItemOrder-Cont-Wrapper">
                        <h1 className="ItemOrder-Cont-Wrapper_title">Grilled Pork Chops w/ Peach Chutney, Asparagus & Potatoes</h1>
                        <p className="ItemOrder-Cont-Wrapper_ing">Marinated grilled pork chops w/ a ginger peach chutney, served w/ grilled asparagus,
                         Yukon potatoes & red wine button mushrooms.</p>
                        <div className="ItemOrder-Cont-Wrapper_media">
                            <div className="ItemOrder-Cont-Wrapper_media_type">
                                <p className="ItemOrder-Cont-Wrapper_mealType">Meal Type: Breakfast, Lunch, Dinner</p>
                                <p className="ItemOrder-Cont-Wrapper_cuisineType">Cuisine Type: American</p>
                            </div>
                            <div className="ItemOrder-Cont-Wrapper_media_icons">
                                <p className="ItemOrder-Cont-Wrapper_media_icons_fb"><img src={fbIcon} />Share</p>
                                <p className="ItemOrder-Cont-Wrapper_media_icons_tweet"><img src={TwitIcon} />Tweet</p>
                                <p className="ItemOrder-Cont-Wrapper_media_icons_copy"><img src={CopyIcon} />Copy</p>
                                <p className="ItemOrder-Cont-Wrapper_media_icons_fav"><img src={FavIcon} /></p>
                            </div>
                        </div>
                        <div className="ItemOrder-Cont-Wrapper_img">
                            <img src={img} />
                        </div>
                        <div className="ItemOrder-Cont-Wrapper_ingredients">
                            <h1 className="ItemOrder-Cont-Wrapper_ingredients_title">Ingredients</h1>
                            <p className="ItemOrder-Cont-Wrapper_ingredients_content">
                                Red Potatoes, Green Beans, Flat Iron Steak, Carrots, Cream Sauce (Water, Half & Half (Milk, Cream), Onion,
                                 Plain Yogurt (Cultured Non Fat Milk), Chicken Stock (Chicken Broth, Natural Flavors, Mirepoix Stock (Carrot, Onion and
                                  Celery Juices), Gelatin, White Wine), Expeller Pressed Canola Oil, Cassava Flour, Garlic, Sea Salt, Thyme, Porcini Mushroom
                                   Powder, Rice Flour, White Pepper), Half & Half (Milk, Cream), Butter (Pasteurized Cream, Natural Flavoring (Lactic Acid, Starter Distillate)), Water,
                                 Sea Salt, Garlic, Oil (Expeller Pressed Canola Oil, Extra Virgin Olive Oil), Rice Flour, Green Peppercorns, Spices.
                            </p>
                        </div>
                    </div>
                    <div className="ItemOrder-Cont-Order">
                        <div className="ItemOrder-Cont-Order_count">
                            <div className="ItemOrder-Cont-Order_count_titlebl">
                                <h1 className="ItemOrder-Cont-Order_count_titlebl_title">$26.90</h1>
                                <p>. Serves: 2 </p>
                            </div>
                            <div className="ItemOrder-Cont-Order_count_btns">
                                <div className="ItemOrder-Cont-Order_count_btns_increment">
                                    <p onClick={this.countClick} className="ItemOrder-Cont-Order_count_btns_increment_min">-</p>
                                    <p>{this.state.count}</p>
                                    <p onClick={this.countClick} className="ItemOrder-Cont-Order_count_btns_increment_plus">+</p>
                                </div>
                                <button className="ItemOrder-Cont-Order_count_btns_order">ADD TO ORDER</button>
                            </div>
                        </div>
                        <div className="ItemOrder-Cont-Order_bad">
                            <div className="ItemOrder-Cont-Order_bad_cal">
                                <h1>245</h1>
                                <p>Calories</p>
                            </div>
                            <div className="ItemOrder-Cont-Order_bad_fat">
                                <h1>16g</h1>
                                <p>Fat</p>
                            </div>
                            <div className="ItemOrder-Cont-Order_bad_carbs">
                                <h1>22g</h1>
                                <p>N.Carbs</p>
                            </div>
                            <div className="ItemOrder-Cont-Order_bad_protein">
                                <h1>34g</h1>
                                <p>Protein</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ItemOrder