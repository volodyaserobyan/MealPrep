import React from 'react'
import Welcome from './components/Welcome/Welcome'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Meals from './components/Meals/Meals'
import Plans from './components/Plans/Plans'
import Clients from './components/Clients/Clients'

class Dashboard extends React.Component {

    render() {
        return (
            <>
                <Welcome />
                <HowItWorks />
                <Meals />
                <Plans />
                <Clients />
            </>
        )
    }
}

export default Dashboard