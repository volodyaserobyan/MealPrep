import React from 'react'
import './ForgetPassword.scss'

class ForgetPassword extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            mail: ''
        }
    }

    handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <section className='ForgetPassword'>
                <form className='ForgetPassword-Cont'>
                    <h1>Forgot Password</h1>
                    <p>Enter your email, we will send you a message with instructions on how to reset your password.</p>
                    <input type='email' name="mail" placeholder="E-mail *" className="ForgetPassword-Cont-Mail" value={this.state.mail} onChange={this.handleChange} />
                    <input type='submit' className="ForgetPassword-Cont-Submit" value="CONTINUE" />
                </form>
            </section>
        )
    }
}

export default ForgetPassword