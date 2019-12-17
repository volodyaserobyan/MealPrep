import React from 'react'
import minusIcon from '../../assets/images/mdi_minus.svg'
import plusIcon from '../../assets/images/VectorPlusss.svg'
import './HelpGeneral.scss'

class HelpGeneral extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            yoMeals: false,
            cookMeals: false,
            plans: false,
            gift: false,
            delivery: false,
            kitchen: false,
            dietPlans: false,
            organic: false
        }
    }

    handleClick = e => {
        switch (e.target.innerText) {
            case 'What is YoMeals exactly?':
                this.setState(state => ({
                    yoMeals: !state.yoMeals
                }))
                break
            case 'Where do you cook your meals?':
                this.setState(state => ({
                    cookMeals: !state.cookMeals
                }))
                break
            case 'How much do your meal plans cost?':
                this.setState(state => ({
                    plans: !state.plans
                }))
                break
            case 'Can I purchase YoMeals as a gift?':
                this.setState(state => ({
                    gift: !state.gift
                }))
                break
            case 'How do I reschedule a delivery?':
                this.setState(state => ({
                    delivery: !state.delivery
                }))
                break
            case 'What are the hygiene standards in your kitchen?':
                this.setState(state => ({
                    kitchen: !state.kitchen
                }))
                break
            case 'Do you cater to specific diet plans?':
                this.setState(state => ({
                    dietPlans: !state.dietPlans
                }))
                break
                case 'Are your products organic?':
                this.setState(state => ({
                    organic: !state.organic
                }))
                break
        }
    }

    render() {
        return (
            <div className="HelpGeneral">
                <div>
                    <h1 onClick={this.handleClick}> What is YoMeals exactly? {this.state.yoMeals ? <img src={minusIcon} /> : <img src={plusIcon} />} </h1>
                    {this.state.yoMeals &&
                        <p>YoMeals is meal service that delivers freshly prepared meals, cooked by our team of chefs and nutritionists. They’re fully cooked
                             so all you have to do is heat them up. So no more worrying about what’s for dinner or lunch. We help you save time while you enjoy real home cooking and
                              the joy that comes with it. At YoMeals,
                    we push for the highest-quality ingredients so we can craft nutrient-rich meals and deliver them right to your doorstep, fresh and ready to eat.</p>
                    }
                </div>
                <div>
                    <h1 onClick={this.handleClick}> Where do you cook your meals? {this.state.cookMeals ? <img src={minusIcon} /> : <img src={plusIcon} />} </h1>
                    {this.state.cookMeals &&
                        <p>YoMeals is meal service that delivers freshly prepared meals, cooked by our team of chefs and nutritionists. They’re fully cooked
                             so all you have to do is heat them up. So no more worrying about what’s for dinner or lunch. We help you save time while you enjoy real home cooking and
                              the joy that comes with it. At YoMeals,
                    we push for the highest-quality ingredients so we can craft nutrient-rich meals and deliver them right to your doorstep, fresh and ready to eat.</p>
                    }
                </div>
                <div>
                    <h1 onClick={this.handleClick}> How much do your meal plans cost? {this.state.plans ? <img src={minusIcon} /> : <img src={plusIcon} />} </h1>
                    {this.state.plans &&
                        <p>YoMeals is meal service that delivers freshly prepared meals, cooked by our team of chefs and nutritionists. They’re fully cooked
                             so all you have to do is heat them up. So no more worrying about what’s for dinner or lunch. We help you save time while you enjoy real home cooking and
                              the joy that comes with it. At YoMeals,
                    we push for the highest-quality ingredients so we can craft nutrient-rich meals and deliver them right to your doorstep, fresh and ready to eat.</p>
                    }
                </div>
                <div>
                    <h1 onClick={this.handleClick}> Can I purchase YoMeals as a gift? {this.state.gift ? <img src={minusIcon} /> : <img src={plusIcon} />} </h1>
                    {this.state.gift &&
                        <p>YoMeals is meal service that delivers freshly prepared meals, cooked by our team of chefs and nutritionists. They’re fully cooked
                             so all you have to do is heat them up. So no more worrying about what’s for dinner or lunch. We help you save time while you enjoy real home cooking and
                              the joy that comes with it. At YoMeals,
                    we push for the highest-quality ingredients so we can craft nutrient-rich meals and deliver them right to your doorstep, fresh and ready to eat.</p>
                    }
                </div>
                <div>
                    <h1 onClick={this.handleClick}> How do I reschedule a delivery? {this.state.delivery ? <img src={minusIcon} /> : <img src={plusIcon} />} </h1>
                    {this.state.delivery &&
                        <p>YoMeals is meal service that delivers freshly prepared meals, cooked by our team of chefs and nutritionists. They’re fully cooked
                             so all you have to do is heat them up. So no more worrying about what’s for dinner or lunch. We help you save time while you enjoy real home cooking and
                              the joy that comes with it. At YoMeals,
                    we push for the highest-quality ingredients so we can craft nutrient-rich meals and deliver them right to your doorstep, fresh and ready to eat.</p>
                    }
                </div>
                <div>
                    <h1 onClick={this.handleClick}> What are the hygiene standards in your kitchen? {this.state.kitchen ? <img src={minusIcon} /> : <img src={plusIcon} />} </h1>
                    {this.state.kitchen &&
                        <p>YoMeals is meal service that delivers freshly prepared meals, cooked by our team of chefs and nutritionists. They’re fully cooked
                             so all you have to do is heat them up. So no more worrying about what’s for dinner or lunch. We help you save time while you enjoy real home cooking and
                              the joy that comes with it. At YoMeals,
                    we push for the highest-quality ingredients so we can craft nutrient-rich meals and deliver them right to your doorstep, fresh and ready to eat.</p>
                    }
                </div>
                <div>
                    <h1 onClick={this.handleClick}> Do you cater to specific diet plans? {this.state.dietPlans ? <img src={minusIcon} /> : <img src={plusIcon} />} </h1>
                    {this.state.dietPlans &&
                        <p>YoMeals is meal service that delivers freshly prepared meals, cooked by our team of chefs and nutritionists. They’re fully cooked
                             so all you have to do is heat them up. So no more worrying about what’s for dinner or lunch. We help you save time while you enjoy real home cooking and
                              the joy that comes with it. At YoMeals,
                    we push for the highest-quality ingredients so we can craft nutrient-rich meals and deliver them right to your doorstep, fresh and ready to eat.</p>
                    }
                </div>
                <div>
                    <h1 onClick={this.handleClick}> Are your products organic? {this.state.organic ? <img src={minusIcon} /> : <img src={plusIcon} />} </h1>
                    {this.state.organic &&
                        <p>YoMeals is meal service that delivers freshly prepared meals, cooked by our team of chefs and nutritionists. They’re fully cooked
                             so all you have to do is heat them up. So no more worrying about what’s for dinner or lunch. We help you save time while you enjoy real home cooking and
                              the joy that comes with it. At YoMeals,
                    we push for the highest-quality ingredients so we can craft nutrient-rich meals and deliver them right to your doorstep, fresh and ready to eat.</p>
                    }
                </div>
            </div>
        )
    }
}

export default HelpGeneral