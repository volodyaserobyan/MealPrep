import React from 'react'
import fbIcon from '../../assets/images/bx_bxl-facebook-square.svg'
import googleIcon from '../../assets/images/VectorGoogle.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUpLocal, userInfo } from '../../action/Action'
import { Redirect } from 'react-router-dom';
import {
    SIGNUPLOCALURL,
    USERSMEURL
} from '../../const/ConstUrls'
import './SignUp.scss'

let _ = require('lodash')

class SignUp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            lastName: "",
            mail: "",
            password: "",
            confPassword: "",
            isSuccess: false
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
            password: this.state.password,
            name: this.state.name,
        }

        if (this.state.password == this.state.confPassword) {
            this.props.signupUserLocal(SIGNUPLOCALURL, sendObj)
        } else {
            alert('not same Password and Conf Pass')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            if (!_.isEmpty(nextProps.signupReducer)) {
                localStorage.setItem('token', nextProps.signupReducer.token)
                this.setState({
                    isSuccess: true
                })
                this.props.infoUser(USERSMEURL)
            }
        }
    }

    render() {
        if (this.state.isSuccess) {
            return (
                <Redirect to={{
                    pathname: `${process.env.PUBLIC_URL}/confirm`
                }} />
            )
        }
        return (
            <section className="SignUp">
                <div className="SignUp-Cont">
                    <h1>Sign Up</h1>
                    <form onSubmit={this.handleSubmit} className="SignUp-Cont-Form">
                        <div className="SignUp-Cont-Form_name">
                            <input name="name" className="input" placeholder="First name *" value={this.state.name} onChange={this.handleChange} />
                            <input name="lastName" className="input" placeholder="Last name *" value={this.state.lastName} onChange={this.handleChange} />
                        </div>
                        <input name="mail" className="input" placeholder="E-mail *" value={this.state.mail} onChange={this.handleChange} />
                        <input name="password" className="input" type='password' placeholder="Password *" value={this.state.password} onChange={this.handleChange} />
                        <input name="confPassword" className="input" type='password' placeholder="Confirm password *" value={this.state.confPassword} onChange={this.handleChange} />
                        <input type="submit" className="SignUp-Cont-Form-Submit" value="CREATE ACCOUNT" />
                    </form>
                    <div className="SignUp-Cont-Line">
                        <span>or</span>
                    </div>
                    <button className="SignUp-Cont-Fb"><img src={fbIcon} /> Sign In with Facebook</button>
                    <button className="SignUp-Cont-Google"><img src={googleIcon} /> Sign In with Google</button>

                    <div className="SignUp-Cont-Member">
                        <p>Have an account </p>
                        <Link className="link" to={{
                            pathname: `${process.env.PUBLIC_URL}/login`
                        }}>
                            Sign In
                            </Link>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        signupReducer: state.signupReducer.signupUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signupUserLocal: (url, data) => dispatch(signUpLocal(url, data)),
        infoUser: url => dispatch(userInfo(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)