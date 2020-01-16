import React from 'react'
import SelectPlansSignUp from './SelectPlansSignUp/SelectPlansSignUp'
import Plans from '../Plans/Plans'
import SelectPlansComplete from './SelectPlansComplete/SelectPLansComplete'
import SelectPlansMenu from './SelectPlansMenu/SelectPlansMenu'
import { Route, NavLink } from 'react-router-dom';
import arrowLeft from '../../assets/images/Arrow-left (1).png'
import './SelectPlans.scss'

class SelectPlans extends React.Component {

    render() {
        return (
            <section className="SelectPlans">
                <nav className="SelectPlans-Nav">
                    <div>
                        <NavLink to={{
                            pathname: `${process.env.PUBLIC_URL}/selectplans/signup`
                        }}
                        activeClassName='active'>
                            <p className="circle">1</p>
                            <p className="context">WELCOME</p>
                            <img src={arrowLeft} />
                        </NavLink>
                        <NavLink to={{
                            pathname: `${process.env.PUBLIC_URL}/selectplans/choose`
                        }}>
                            <p className="circle">2</p>
                            <p className="context">PLANS</p>
                            <img src={arrowLeft} />
                        </NavLink>
                        <NavLink to={{
                            pathname: `${process.env.PUBLIC_URL}/selectplans/menu`
                        }}>
                            <p className="circle">3</p>
                            <p className="context">MEALS</p>
                            <img src={arrowLeft} />
                        </NavLink>
                        <NavLink to={{
                            pathname: `${process.env.PUBLIC_URL}/selectplans/complete`
                        }}>
                            <p className="circle">4</p>
                            <p className="context">CHECKOUT</p>
                            <img src={arrowLeft} />
                        </NavLink>
                    </div>
                </nav>
                <div className="SelectPlans-Cont innerWrap">
                    <Route path={`${process.env.PUBLIC_URL}/selectplans/signup`} component={SelectPlansSignUp} />
                    <Route path={`${process.env.PUBLIC_URL}/selectplans/choose`} component={() => <Plans isDashboard={true} />} />
                    <Route path={`${process.env.PUBLIC_URL}/selectplans/menu`} component={SelectPlansMenu} />
                    <Route path={`${process.env.PUBLIC_URL}/selectplans/complete`} component={SelectPlansComplete} />
                </div>
            </section>
        )
    }
}

export default SelectPlans