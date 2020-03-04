import React from 'react'
import Logo from '../../assets/images/Asset 1 1.svg'
import ShopImg from '../../assets/images/Vector.svg'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { isAuth, isVerified } from '../helpers/Utilities'
import UserVector from '../../assets/images/userVector.png'
import arrowDown from '../../assets/images/arrowDown.png'
import './NavBar.scss'
import { openDropDown } from '../../action/Action'

class NavBar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            isWelcome: false
        }
        this.classNameHamburger = ""
    }

    handleClick = () => {
        if (!this.state.isOpen) {
            this.setState({
                isOpen: true
            })
            this.classNameHamburger = "open"
        }
        else {
            this.setState({
                isOpen: false
            })

            this.classNameHamburger = ""
        }
    }

    handleDropDown = () => {
        if (this.props.dropDownReducer == undefined || this.props.dropDownReducer == false) {
            this.props.isDropDown(true)
        }
        else {
            this.props.isDropDown(false)
        }
    }

    handleClickWelcome = () => {
        this.setState({
            isWelcome: true
        })
    }

    render() {
        if (this.state.isWelcome) {
            return (
                <Redirect to={{
                    pathname: '/'
                }} />
            )
        }
        console.log(isVerified(), 'VErify')
        console.log(isAuth(), 'isAuth')
        return (
            <nav className="NavBar">
                {JSON.parse(localStorage.getItem('isPending')) == true &&
                    <div className="Attention">
                        <p>Attention, you have not confirmed email. Please confirm your email. Confirm now</p>
                    </div>}
                <div className="NavBar-Cont innerWrap">
                    <section className="NavBar-Cont-Menu">
                        <div className="NavBar-Cont-Menu_logoImg">
                            <Link to={{
                                pathname: `${process.env.PUBLIC_URL}/`
                            }}>
                                <img src={Logo} className="NavBar-Cont-Logo" />
                            </Link>
                        </div>
                        <div className={`NavBar-Cont-Menu_cont ${this.classNameHamburger}`}>
                            <Link to={{
                                pathname: `${process.env.PUBLIC_URL}/meals`
                            }}>Meals
                                </Link>
                            <Link to={{
                                pathname: `${process.env.PUBLIC_URL}/about`
                            }}>About us
                                </Link>
                            <Link to={{
                                pathname: `${process.env.PUBLIC_URL}/blog`
                            }}>Blog
                                </Link>
                            <Link to={{
                                pathname: `${process.env.PUBLIC_URL}/contacts`
                            }}>Contacts
                            </Link>
                        </div>
                        <div onClick={this.handleClick} className={`m-lines ${this.classNameHamburger}`}>
                            <div className="">
                                <div className="one"></div>
                                <div className="two"></div>
                                <div className="three"></div>
                            </div>
                        </div>
                    </section>
                    <section className="NavBar-Cont-Login">
                        <div className="NavBar-Cont-Login_shop">
                            <img src={ShopImg} className="NavBar-Cont-Shop_logo" />
                            <p>0</p> <p className="NavBar-Cont-Login_shop_items">Items</p>
                        </div>
                        {!isAuth() ?
                            <div className="NavBar-Cont-Login_cont">
                                <Link to={{
                                    pathname: `${process.env.PUBLIC_URL}/signup`
                                }}>
                                    <button className="NavBar-Cont-Login_cont_signUp">Sign Up</button>
                                </Link>
                                <Link to={{
                                    pathname: `${process.env.PUBLIC_URL}/login`
                                }}><button className="NavBar-Cont-Login_cont_signIn">Sign In</button>
                                </Link>
                            </div> : <div className="User">
                                <img src={UserVector} alt='' />
                                <div onClick={this.handleDropDown}>
                                    <p>My Account</p>
                                    <img src={arrowDown} alt='' />
                                </div>
                            </div>}
                    </section>
                </div>
            </nav>
        )
    }
}


const mapStateToProps = state => {
    return {
        signupReducerVerify: state.signupReducer.verifyUser,
        signupReducerUser: state.signupReducer.signupUser,
        signinReducerLogOut: state.signinReducer.logOutUser,
        dropDownReducer: state.dropDownReducer.isDropDown,
        userReducer: state.userReducer.userInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isDropDown: bool => dispatch(openDropDown(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)