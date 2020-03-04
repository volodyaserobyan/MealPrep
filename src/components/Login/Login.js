import React from 'react'
import fbIcon from '../../assets/images/bx_bxl-facebook-square.svg'
import googleIcon from '../../assets/images/VectorGoogle.svg'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signInCall, UserInfo } from '../../action/Action'
import { Redirect } from 'react-router-dom';
import {
    LOGINLOCALURL,
    GETMEALSURL
} from '../../const/ConstUrls'
import './Login.scss'

let _ = require('lodash')

class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            mail: "",
            password: "",
            isSuccess: false,
            errors: []
        }
    }

    handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        const sendObj = {
            email: this.state.mail,
            password: this.state.password
        }

        this.props.signInLocal(LOGINLOCALURL, sendObj)
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            if (!_.isEmpty(nextProps.signinReducer)) {
                if (nextProps.signinReducer.message != 'Errors') {
                    localStorage.setItem('token', nextProps.signinReducer.token)
                    this.setState({
                        isSuccess: true
                    })
                    this.props.userInfo(GETMEALSURL)
                }
                else {
                    this.setState({
                        errors: nextProps.signinReducer.errors.errors
                    })
                }
            }
        }
    }

    render() {
        if (this.state.isSuccess) {
            return (
                <Redirect to={{
                    pathname: `${process.env.PUBLIC_URL}/`
                }} />
            )
        }
        return (
            <section className="Login">
                <div className="Login-Cont">
                    <h1>Sign In</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.state.errors.map(item => <p key={item.value}>{item.msg}</p>)}
                        <input name="mail" placeholder="E-mail *" className="Login-Cont-Mail" value={this.state.mail} onChange={this.handleChange} />
                        <input name="password" placeholder="Password *" type='password' className="Login-Cont-Password" value={this.state.password} onChange={this.handleChange} />
                        <input type="submit" className="Login-Cont-Submit" value="LOGIN" />
                        <Link className="link" to={{
                            pathname: `${process.env.PUBLIC_URL}/forgetpassword`
                        }}>
                            <p className='forget'>Forgot password?</p>
                        </Link>
                    </form>
                    <div className="Login-Cont-Line">
                        <span>or</span>
                    </div>
                    <button className="Login-Cont-Fb"><img src={fbIcon} /> Sign In with Facebook</button>
                    <button className="Login-Cont-Google"><img src={googleIcon} /> Sign In with Google</button>
                    <div className="Login-Cont-Member">
                        <p>Not a member? </p>
                        <Link className="link" to={{
                            pathname: `${process.env.PUBLIC_URL}/signup`
                        }}>
                            Sign Up
                            </Link>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        signinReducer: state.signinReducer.signinUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signInLocal: (url, data) => dispatch(signInCall(url, data)),
        userInfo: url => dispatch(UserInfo(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)