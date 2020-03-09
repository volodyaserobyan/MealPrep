import React from 'react'
import Logo from '../../assets/images/Logo 1 Transparent PNG 1.svg'
import Fb from '../../assets/images/Vector (1).svg'
import Twitter from '../../assets/images/Vector (2).svg'
import Inst from '../../assets/images/Vector (3).svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Footer.scss'
import { getCategoriesHelpCenter } from '../../action/Action'

class Footer extends React.Component {

    render() {
        return (
            <section className="Footer">
                <div className="Footer-Cont innerWrap">
                    <div className="Footer-Cont-Logo">
                        <img src={Logo} />
                    </div>
                    <div className="Footer-Cont-Menu">
                        <Link to={{
                            pathname: `${process.env.PUBLIC_URL}/meals`
                        }}>Meals
                        </Link>
                        <Link to={{
                            pathname: `${process.env.PUBLIC_URL}/about`
                        }}>About us
                        </Link>
                        <Link to={{
                            pathname: `${process.env.PUBLIC_URL}/blog`
                        }}>Blog</Link>
                        <Link to={{
                            pathname: `${process.env.PUBLIC_URL}/contacts`
                        }}>Contacts</Link>
                        <Link to={{
                            pathname: `${process.env.PUBLIC_URL}/help/${this.props.helpCenterReducerGET.categories[0]._id}`
                        }}>Help</Link>
                    </div>
                    <div className="Footer-Cont-Terms">
                        <Link to={{
                            pathname: `${process.env.PUBLIC_URL}/plans`
                        }}>Plans</Link>
                        <Link to={{
                            pathname: `${process.env.PUBLIC_URL}/partners`
                        }}>Partners</Link>
                        <Link to={{
                            pathname: `${process.env.PUBLIC_URL}/testimonials`
                        }}>Testimonials</Link>
                        <Link to={{
                            pathname: `${process.env.PUBLIC_URL}/conditions`
                        }}>Terms & Conditions</Link>
                    </div>
                    <div className="Footer-Cont-Contacts">
                        <p>971 Timber Wolf Trail undefined Stamford, Delaware 90039 United States</p>
                        <p>(270) 555-0117</p>
                        <div className="Footer-Cont-Contacts_icons">
                            <img src={Inst} />
                            <img src={Fb} />
                            <img src={Twitter} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        helpCenterReducerGET: state.helpCenterReducer.getCategories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategoriesHelp: url => dispatch(getCategoriesHelpCenter(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)