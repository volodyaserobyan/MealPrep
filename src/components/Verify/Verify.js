import React from 'react'
import { connect } from 'react-redux'
import { verifyCall, UserInfo, refreshVerification } from '../../action/Action'
import mailIcon from '../../assets/images/mail.png'
import {
    VERIFYURL,
    USERSMEURL,
    REFRESHVERIFYURL
} from '../../const/ConstUrls'
import './Verify.scss'
let _ = require('lodash')

class Verify extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isSuccess: null
        }
    }

    componentDidMount() {
        const sendObj = {
            "verify_token": this.props.match.params.token
        }
        this.props.verifyUser(VERIFYURL, sendObj)
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            if (!_.isEmpty(nextProps.signupReducerVERIFY) && nextProps.signupReducerVERIFY.error_code === 'EXPIRED_VERIFICATION_CODE') {
                this.setState({
                    isSuccess: false
                })
            }
            else {
                this.setState({
                    isSuccess: true
                })
                this.props.userInfo(USERSMEURL)
            }
        }
    }

    handleClick = () => {
        this.props.refreshVerify(REFRESHVERIFYURL)
    }

    render() {
        return (
            <section className="Verify">
                <div className="Verify-Cont">
                    <img src={mailIcon} alt='' />
                    <div>
                        {
                            this.state.isSuccess ?
                                <div>
                                    <h1>Verify email</h1>
                                    <p>Congratulations your email is verified</p>
                                </div> :
                                <div>
                                    <p onClick={this.handleClick}>Refresh Token</p>
                                </div>
                        }
                    </div>
                </div>
            </section>
        )
    }
}


const mapStateToProps = state => {
    return {
        signupReducerVERIFY: state.signupReducer.verifyUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        verifyUser: (url, token) => dispatch(verifyCall(url, token)),
        refreshVerify: url => dispatch(refreshVerification(url)),
        userInfo: url => dispatch(UserInfo(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Verify)