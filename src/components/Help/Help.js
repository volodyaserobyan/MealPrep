import React from 'react'
import HelpGeneral from './HelpGeneral'
import './Help.scss'

class Help extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            general: true,
            account: false,
            techSupp: false
        }
    }

    handleClick = e => {
        switch(e.target.innerText) {
            case 'General':
                this.setState({
                    general: true,
                    account: false,
                    techSupp: false
                })
                break;
            case 'Managing my Account':
                    this.setState({
                        general: false,
                        account: true,
                        techSupp: false
                    })
                    break;
            case 'Technical Support':
                this.setState({
                    general: false,
                    account: false,
                    techSupp: true
                })
                break
        } 
    }

    render() {
        return (
            <div className="Help">
                <div className="Help-Cont innerWrap">
                        <h1 className="Help-Cont-Title">Help Center</h1>
                    <div className="Help-Cont-Wrap">
                        <div className="Help-Cont-Wrap-Menu">
                            <p onClick={this.handleClick} className={`${this.state.general && 'isActive'}`}>General</p>
                            <p onClick={this.handleClick} className={`${this.state.account && 'isActive'}`}>Managing my Account</p>
                            <p onClick={this.handleClick} className={`${this.state.techSupp && 'isActive'}`}>Technical Support</p>
                        </div>
                        <div className="Help-Cont-Wrap-Context">
                            {this.state.general ? <HelpGeneral /> : this.state.account ? <>Account</> : <>Tech Support</>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Help