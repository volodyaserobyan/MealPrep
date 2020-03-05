import React from 'react'
import { connect } from 'react-redux'
import { forgetPassword } from '../../action/Action'
import { FORGETPASSWORDURL } from '../../const/ConstUrls'
import './ForgetPassword.scss'

let _ = require('lodash')

class ForgetPassword extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            mail: '',
            errors: [],
            message: ''
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

        const obj = {
            email: this.state.mail
        }

        this.props.passwordForget(FORGETPASSWORDURL, obj)
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            if (!_.isEmpty(nextProps.passwordReducerFORGET)) {
                if (nextProps.passwordReducerFORGET.error_code === 'INVALID_EMAIL') {
                    this.setState(prevState => ({
                        errors: prevState.errors.concat(nextProps.passwordReducerFORGET.errors)
                    }))
                }
                else {
                    this.setState({
                        message: nextProps.passwordReducerFORGET.message
                    })
                }
            }
        }
    }

    render() {
        console.log(this.state)
        return (
            <section className='ForgetPassword'>
                <form onSubmit={this.handleSubmit} className='ForgetPassword-Cont'>
                    <h1>Forgot Password</h1>
                    <p>Enter your email, we will send you a message with instructions on how to reset your password.</p>
                    <input type='email' name="mail" placeholder="E-mail *" className="ForgetPassword-Cont-Mail" value={this.state.mail} onChange={this.handleChange} />
                    {this.state.message === '' ? this.state.errors.map((item, i) => <p className='ForgetPassword-Cont-Erros' key={i}>{item.msg}</p>)
                        : <p>{this.state.message}</p>}
                    <input type='submit' className="ForgetPassword-Cont-Submit" value="CONTINUE" />
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        passwordReducerFORGET: state.passwordReducer.forgetPassword
    }
}

const mapDispatchToProps = dispatch => {
    return {
        passwordForget: (url, email) => dispatch(forgetPassword(url, email)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword)