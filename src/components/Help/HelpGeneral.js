import React from 'react'
import minusIcon from '../../assets/images/mdi_minus.svg'
import plusIcon from '../../assets/images/VectorPlusss.svg'
import './HelpGeneral.scss'

let base64Img = require('base64-img');

class HelpGeneral extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {

        return (
            <div className="HelpGeneral">
                {this.props.item.questions.map(item =>
                    <div key={item._id}>
                        <h1 onClick={() => this.setState(prevState => ({ isOpen: !prevState.isOpen }))}> {item.title} {this.state.yoMeals ? <img src={minusIcon} /> : <img src={plusIcon} />} </h1>
                        {this.state.isOpen &&
                            <p>{item.answere}</p>
                        }
                    </div>
                )}
            </div>
        )
    }
}

export default HelpGeneral