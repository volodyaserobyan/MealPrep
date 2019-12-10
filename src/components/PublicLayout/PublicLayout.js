import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './PublicLayout.scss'

const PublicLayout = ({ children }) => {

    return (
        <section>
            <NavBar />
            <div className="main">
                {children}
            </div>
            <Footer />
        </section>
    )
}

export default PublicLayout