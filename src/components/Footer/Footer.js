import React from 'react'
import Logo from '../../assets/images/Logo 1 Transparent PNG 1.svg'
import Fb from '../../assets/images/Vector (1).svg'
import Twitter from '../../assets/images/Vector (2).svg'
import Inst from '../../assets/images/Vector (3).svg'
import './Footer.scss'

class Footer extends React.Component {

    render() {
        return (
            <section className="Footer">
                <div className="Footer-Cont innerWrap">
                    <div className="Footer-Cont-Logo">
                        <img src={Logo} />
                    </div>
                    <div className="Footer-Cont-Menu">
                        <a href="#">Meals</a>
                        <a href="#">About us</a>
                        <a href="#">Blog</a>
                        <a href="#">Contacts</a>
                        <a href="#">Help</a>
                    </div>
                    <div className="Footer-Cont-Terms">
                        <a href="#">Plans</a>
                        <a href="#">Partners</a>
                        <a href="#">Testimonials</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                    <div className="Footer-Cont-Contacts">
                        <p>971 Timber Wolf Trail undefined Stamford, Delaware 90039 United States</p>
                        <p>(270) 555-0117</p>
                        <div className="Footer-Cont-Contacts_icons">
                            <img src={Inst}/>
                            <img src={Fb}/>
                            <img src={Twitter}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer