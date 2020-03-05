import React from 'react'
import { connect } from 'react-redux'
import { changePassword } from '../../action/Action'
import { CHANGEPASSWORDURL } from '../../const/ConstUrls'
import './ChangePassword.scss'

let _ = require('lodash')

class ChangePassword extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            newPass: '',
            confPass: '',
            message: '',
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

        if (this.state.newPass === this.state.confPass) {
            const sendObj = {
                "password_change_token": this.props.match.params.token,
                newPassword: this.state.newPass
            }
            this.props.passwordChange(CHANGEPASSWORDURL, sendObj)
        }
        else {
            alert('Check Conf Pass')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps))
            if (!_.isEmpty(nextProps.passwordReducerCHANGE)) {
                this.setState({
                    message: nextProps.passwordReducerCHANGE.message
                })
            }
    }

    render() {
        return (
            <section className='ChangePassword'>
                <div className='ChangePassword-Cont'>
                    <div className='ChangePassword-Cont-Title'>
                        <h1>Change Password</h1>
                    </div>
                    <div className='ChangePassword-Cont-Context'>
                        <form onSubmit={this.handleSubmit} className='ChangePassword-Cont-Context-Form'>
                            <div>
                                <p>New Password</p>
                                <input type='password' className='ChangePassword-Cont-Form-Simp' name='newPass' value={this.state.newPass} onChange={this.handleChange} />
                            </div>
                            <div>
                                <p>Confirm Password</p>
                                <input type='password' className='ChangePassword-Cont-Form-Simp' name='confPass' value={this.state.confPass} onChange={this.handleChange} />
                            </div>
                            <p>{this.state.message}</p>
                            <input type='submit' className="ForgetPassword-Cont-Submit" value="SAVE" />
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        passwordReducerCHANGE: state.passwordReducer.changePassword
    }
}

const mapDispatchToProps = dispatch => {
    return {
        passwordChange: (url, info) => dispatch(changePassword(url, info))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)