import React from 'react'
import Logo from '../../assets/images/Asset 1 1.svg'
import ShopImg from '../../assets/images/Vector.svg'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './NavBar.scss'

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
        return (
            <nav className="NavBar">
                <div className="NavBar-Cont innerWrap">
                    <section className="NavBar-Cont-Menu">
                        <div onClick={this.handleClickWelcome} className="NavBar-Cont-Menu_logoImg">
                            <a href="/" ><img src={Logo} className="NavBar-Cont-Logo" /></a>
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
                        </div>
                    </section>
                </div>
            </nav>
        )
    }
}

export default NavBar