import React from 'react'
import HelpGeneral from './HelpGeneral'
import { connect } from 'react-redux'
import { getCategoriesHelpCenter } from '../../action/Action'
import { HELPCENTERCATGURL } from '../../const/ConstUrls'
import { NavLink } from 'react-router-dom'
import './Help.scss'

let _ = require('lodash')

class Help extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            // general: true,
            // account: false,
            // techSupp: false,
            isSuccess: false
        }
    }

    // handleClick = e => {
    //     switch (e.target.innerText) {
    //         case 'help center 288821':
    //             this.setState({
    //                 general: true,
    //                 account: false,
    //                 techSupp: false
    //             })
    //             break;
    //         case 'General':
    //             this.setState({
    //                 general: false,
    //                 account: true,
    //                 techSupp: false
    //             })
    //             break;
    //         case 'Restaurants':
    //             this.setState({
    //                 general: false,
    //                 account: false,
    //                 techSupp: true
    //             })
    //             break
    //     }
    // }

    componentDidMount() {
        if (_.isEmpty(this.props.helpCenterReducerGET)) {
            this.props.getCategoriesHelp(HELPCENTERCATGURL)
        } else {
            this.setState({
                isSuccess: true
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            if (!_.isEmpty(nextProps.helpCenterReducerGET)) {
                this.setState({
                    isSuccess: true
                })
            }
        }
    }

    render() {
        if (!this.state.isSuccess) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        return (
            <div className="Help">
                <div className="Help-Cont innerWrap">
                    <h1 className="Help-Cont-Title">Help Center</h1>
                    <div className="Help-Cont-Wrap">
                        <div className="Help-Cont-Wrap-Menu">
                            {this.props.helpCenterReducerGET.categories.map(item =>
                                <NavLink to={{
                                    pathname: `${process.env.PUBLIC_URL}/help/${item._id}`,
                                }}
                                    activeClassName='isActive'>
                                    <p key={item._id}>{item.title}</p>
                                </NavLink>)}
                        </div>
                        <div className="Help-Cont-Wrap-Context">
                            {this.props.helpCenterReducerGET.categories.map(item =>
                                this.props.match.params.id == item._id && <HelpGeneral item={item} />)}
                        </div>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Help)