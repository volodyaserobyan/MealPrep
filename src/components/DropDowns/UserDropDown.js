import React from 'react'
import { connect } from 'react-redux'
import { SignOutCall } from '../../action/Action'
import { Redirect } from 'react-router-dom'
import { LOGOUTLOCALURL } from '../../const/ConstUrls'
import { NavLink } from 'react-router-dom'
import './UserDropDown.scss'
let _ = require('lodash')

class UserDropDown extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isLogged: false
        }
    }

    signOut = () => {
        this.props.signOutLocal(LOGOUTLOCALURL)
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            if (!_.isEmpty(nextProps.signinReducerLogOut)) {
                this.setState({
                    isLogged: true
                })
            }
        }
    }

    render() {
        if (this.state.isLogged) {
            return (
                <Redirect to={{
                    pathname: `${process.env.PUBLIC_URL}/`
                }} />
            )
        }
        return (
            <section className="UserDropDown">
                <div className="UserDropDown-Cont">
                    <p>My Orders</p>
                    <NavLink to={{
                        pathname: `${process.env.PUBLIC_URL}/myaccount`
                    }}>
                        <p>Settings</p>
                    </NavLink>
                    <p onClick={this.signOut}>Sign Out</p>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        signinReducerLogOut: state.signinReducer.logOutUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOutLocal: url => dispatch(SignOutCall(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDropDown)