import React from 'react'
import Item from './Item'
import './ClientsComplete.scss'

class ClientsComplete extends React.Component {

    render() {
        return (
            <div className="ClientsComplete">
                <div className="ClientsComplete-Cont">
                    <h1>Testimonials</h1>
                    <div>
                        {[1, 2, 3, 4, 5, 6, 7].map(id => <Item key={id} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default ClientsComplete