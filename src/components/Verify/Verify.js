import React from 'react'
import { connect } from 'react-redux'
import { verifyCall, UserInfo } from '../../action/Action'
import mailIcon from '../../assets/images/mail.png'
import './Verify.scss'
let _ = require('lodash')

class Verify extends React.Component {

    componentDidMount() {
        const sendObj = {
            "verify_token": this.props.match.params.token
        }
        this.props.verifyUser('https://andoghevian-chef-app.herokuapp.com/users/local/auth/code/verify', sendObj)
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            if (!_.isEmpty(nextProps.signupReducer)) {
                localStorage.setItem('verify', nextProps.signupReducer.message)
                this.props.userInfo('https://andoghevian-chef-app.herokuapp.com/users/me')
            }
        }
    }

    render() {
        return (
            <section className="Verify">
                <div className="Verify-Cont">
                    <img src={mailIcon} alt='' />
                    <div>
                        <div>
                            <h1>Verify email</h1>
                            <p>Congratulations your email is verified</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


const mapStateToProps = state => {
    return {
        signupReducer: state.signupReducer.verifyUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        verifyUser: (url, token) => dispatch(verifyCall(url, token)),
        userInfo: url => dispatch(UserInfo(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Verify)