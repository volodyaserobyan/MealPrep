import React from 'react'
import LogoPortion from '../../assets/images/logoPortion.png'
import './Confirm.scss'

class Confirm extends React.Component {

    render() {
        return (
            <section className="Confirm">
                <div className="Confirm-Cont">
                    <div className="Confirm-Cont-Title">
                        <div>
                            <img src={LogoPortion} alt='' />
                        </div>
                        <div>
                            <h1>Hello </h1>
                        </div>
                        <p>Thanks so much for joining Portion Control!</p>
                    </div>
                    <div className="Confirm-Cont-Context">
                        <div>
                            <h2>Your account is not activated right now. To activate your account, you must verify your email.</h2>
                        </div>
                        <p>If you didn’t request this email, there’s nothing to worry about — you can safely ignore it.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Confirm