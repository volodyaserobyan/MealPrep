import React from 'react'
import union from '../../assets/images/union.jpg'
import './MyAccount.scss'

class MyAccount extends React.Component {

    render() {
        return (
            <section className='MyAccount'>
                <div className="MyAccount-Cont innerWrap">
                    <div className='MyAccount-Cont-Title'>
                        <h1>My Account</h1>

                        <div>
                            <img src={union} alt='' />
                            <p>Sign Out</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MyAccount