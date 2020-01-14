import React from 'react'

import './Input.scss'

class Input extends React.Component {

    handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <input className="input" value={this.props.value} onChange={this.handleChange} placeholder={this.props.placeholder} />
        )
    }
}

export default Input