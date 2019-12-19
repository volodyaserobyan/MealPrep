import React from 'react'
import fbIcon from '../../assets/images/bx_bxl-facebook-square.svg'
import googleIcon from '../../assets/images/VectorGoogle.svg'
import { Link } from 'react-router-dom'

import './Login.scss'

class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            mail: "",
            password: ""
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
            <section className="Login">
                <div className="Login-Cont">
                    <h1>Sign In</h1>
                    <form>
                        <input name="mail" placeholder="E-mail *" className="Login-Cont-Mail" value={this.state.mail} onChange={this.handleChange} />
                        <input name="password" placeholder="Password *" className="Login-Cont-Password" value={this.state.password} onChange={this.handleChange} />
                        <input type="submit" className="Login-Cont-Submit" value="LOGIN" />
                    </form>
                    <div className="Login-Cont-Line">
                        <span>or</span>
                    </div>
                    <button className="Login-Cont-Fb"><img src={fbIcon} /> Sign In with Facebook</button>
                    <button className="Login-Cont-Google"><img src={googleIcon} /> Sign In with Google</button>

                    <div className="Login-Cont-Member">
                        <p>Not a member? </p>
                        <Link to={{
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

export default Login