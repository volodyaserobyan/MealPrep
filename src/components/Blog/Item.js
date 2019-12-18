import React from 'react'
import ImgBlog from '../../assets/images/ImgBlog.svg'
import ImgBlog1 from '../../assets/images/ImgBlog(1).svg'
import ImgBlog2 from '../../assets/images/ImgBlog(2).svg'
import ImgBlog3 from '../../assets/images/ImgBlog(3).svg'
import ImgBlog4 from '../../assets/images/ImgBlog(4).svg'
import ImgBlog5 from '../../assets/images/ImgBlog(5).svg'
import ImgBlog6 from '../../assets/images/ImgBlog(6).svg'
import ImgBlog7 from '../../assets/images/ImgBlog(7).svg'
import ImgBlog8 from '../../assets/images/ImgBlog(8).svg'
import messageItem from '../../assets/images/VectorMessage.svg'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

import './Item.scss'
import { blogItems } from '../../action/Action'

class Item extends React.Component {

    constructor(props) {
        super(props)

        this.type = ""
        this.title = ""
    }

    handleEvent = () => {
        const sentObj = {
            id: this.props.id,
            title: this.title,
            type: this.type
        }
        this.props.passBlog(sentObj)
    }

    render() {
        let img
        switch (this.props.id) {
            case 1:
                img = ImgBlog
                this.type = "Recipes"
                this.title = "Quick Spaghetti & Beef Marinara Recipe"
                break;
            case 2:
                img = ImgBlog1
                this.type = "Lifestyle"
                this.title = "Healthy Dinner Ideas For Family Meals"
                break;
            case 3:
                img = ImgBlog2
                this.type = "Nutrition, Recipes"
                this.title = "20 Minute Thai Beef Rice Bowl Recipe"
                break;
            case 4:
                img = ImgBlog3
                this.type = "Nutrition"
                this.title = "Meal Delivery Services: A Better Way to Eat"
                break;
            case 5:
                img = ImgBlog4
                this.type = "Lifestyle, Fitness"
                this.title = "7 Amazing Health Benefits of Matcha Green Tea"
                break;
            case 6:
                img = ImgBlog5
                this.type = "Inspiration"
                this.title = "The Banting Diet 101: History, Benefits & Guidelines"
                break;
            case 7:
                img = ImgBlog6
                this.type = "Fitness"
                this.title = "5 Reasons All Athletes Should Do Yoga"
                break;
            case 8:
                img = ImgBlog7
                this.type = "Recipes"
                this.title = "Trifecta Five Minute Burger Recipe"
                break;
            case 9:
                img = ImgBlog8
                this.type = "Lifestyle, Recipes"
                this.title = "9 Healthy Coffee Add-Ins to Power Up Your Mornings"
                break;

            default:
                break;
        }
        return (
            <NavLink onClick={this.handleEvent} className="navLink Blog-Item item" to={{
                pathname: `${process.env.PUBLIC_URL}/blogItem/:id/${this.props.id}`
            }}>
                <div className="Blog-Item_img">
                    <img src={img} />
                </div>
                <div className="Blog-Item-Wrapper">
                    <p className="Blog-Item-Wrapper_type">{this.type}</p>
                    <h1 className="Blog-Item-Wrapper_title">{this.title}</h1>
                    <p className="Blog-Item-Wrapper_context">Spaghetti and Marinara is such a classic dinner meal that it would be unwise to not to provide you...</p>
                    <div className="Blog-Item-Wrapper_date">
                        <p>Nov 28, 2019</p>
                        <div className="Blog-Item-Wrapper_date_message">
                            <img src={messageItem} />
                            <p>4</p>
                        </div>
                    </div>
                </div>
            </NavLink>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        passBlog: (infoObj) => dispatch(blogItems(infoObj))
    }
}

export default connect(null, mapDispatchToProps)(Item);
