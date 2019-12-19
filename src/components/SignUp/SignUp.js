import React from 'react'
import fbIcon from '../../assets/images/bx_bxl-facebook-square.svg'
import googleIcon from '../../assets/images/VectorGoogle.svg'
import { Link } from 'react-router-dom'

import './SignUp.scss'

class SignUp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            lastName: "",
            mail: "",
            password: "",
            confPassword: ""
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
            <section className="SignUp">
                <div className="SignUp-Cont">
                    <h1>Sign Up</h1>
                    <form className="SignUp-Cont-Form">
                        <div className="SignUp-Cont-Form_name">
                            <input name="name" className="input" placeholder="First name *" value={this.state.name} onChange={this.handleChange} />
                            <input name="lastName" className="input" placeholder="Password *" value={this.state.lastName} onChange={this.handleChange} />
                        </div>
                        <input name="mail" className="input" placeholder="E-mail *" value={this.state.mail} onChange={this.handleChange} />
                        <input name="password" className="input" placeholder="Password *" value={this.state.password} onChange={this.handleChange} />
                        <input name="confPassword"className="input" placeholder="Confirm password *" value={this.state.confPassword} onChange={this.handleChange} />
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

export default SignUp