import React from 'react'
import fbIcon from '../../assets/images/FB-Vector.svg'
import TwitIcon from '../../assets/images/bx_bxl-twitter.svg'
import CopyIcon from '../../assets/images/bx_bx-link.svg'
import FavIcon from '../../assets/images/Fav.svg'
import img from '../../assets/images/ImageBackg.svg'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux'
import './ItemOrder.scss'
let _ = require('lodash')

class ItemOrder extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            item: {

            }
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

    componentDidMount() {
        if (this.props.mealsItemReducerGET != undefined) {
            this.props.mealsItemReducerGET.map((item, id) => {
                if (item._id == this.props.match.params.id) {
                    this.setState({
                        item: item
                    })
                }
            })
        }
    }

    render() {
        if (_.isEmpty(this.state.item)) {
            return (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            );
        }
        return (
            <section className="ItemOrder">
                <div className="ItemOrder-Cont innerWrap">
                    <div className="ItemOrder-Cont-Wrapper">
                        <h1 className="ItemOrder-Cont-Wrapper_title">{this.state.item.title}</h1>
                        <p className="ItemOrder-Cont-Wrapper_ing">{this.state.item.desc}</p>
                        <div className="ItemOrder-Cont-Wrapper_media">
                            <div className="ItemOrder-Cont-Wrapper_media_type">
                                {this.state.item.filterTags.selects.map((item, i) => 
                                <div key={i} className="ItemOrder-Cont-Wrapper_mealType">{item.name}: {item.values.map((item, i) => <p key={i}>{item}</p>)}</div>)}
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
                                {this.state.item.ingredients}
                            </p>
                        </div>
                    </div>
                    <div className="ItemOrder-Cont-Order">
                        <div className="ItemOrder-Cont-Order_count">
                            <div className="ItemOrder-Cont-Order_count_titlebl">
                                <h1 className="ItemOrder-Cont-Order_count_titlebl_title">{this.state.item.price}</h1>
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
                                <h1>{this.state.item.summary.calories}</h1>
                                <p>Calories</p>
                            </div>
                            <div className="ItemOrder-Cont-Order_bad_fat">
                                <h1>{this.state.item.summary.fat}</h1>
                                <p>Fat</p>
                            </div>
                            <div className="ItemOrder-Cont-Order_bad_carbs">
                                <h1>{this.state.item.summary.ncarbs}</h1>
                                <p>N.Carbs</p>
                            </div>
                            <div className="ItemOrder-Cont-Order_bad_protein">
                                <h1>{this.state.item.summary.protein}</h1>
                                <p>Protein</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        mealsItemReducerGET: state.mealsItemReducer.getMeals
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchItemsToCard: data => dispatch(addToCard(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemOrder)