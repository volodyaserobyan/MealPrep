import React from 'react'
import union from '../../assets/images/Union.png'
import user from '../../assets/images/Userpic_placeholder.png'
import { connect } from 'react-redux'
import { userInfo, deleteUser } from '../../action/Action'
import { USERSMEURL, DELETEUSERURL } from '../../const/ConstUrls'
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './MyAccount.scss'

let _ = require('lodash')

class MyAccount extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isDeleted: false,
            file: '',
            imagePreviewUrl: '',
            pictures: {}
        }
    }

    componentDidMount() {
        if (_.isEmpty(this.props.userReducerGET)) {
            this.props.infoUser(USERSMEURL)
        }
    }

    deleteUserClick = () => {
        this.props.userDelete(`${DELETEUSERURL}${localStorage.getItem('userId')}`)
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            if (!_.isEmpty(nextProps.userReducerDELETE)) {
                localStorage.clear()
                this.setState({
                    isDeleted: true
                })
            }
        }
    }

    handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
                pictures: { src: reader.result, name: file.name }
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        console.log(this.state)
        if (this.state.isDeleted) {
            return (
                <Redirect to={{
                    pathname: `${process.env.PUBLIC_URL}/`
                }} />
            )
        }
        return (
            <section className='MyAccount'>
                <div className="MyAccount-Cont">
                    <div className='MyAccount-Cont-Title'>
                        <h1>My Account</h1>
                        <div>
                            <img src={union} alt='' />
                            <p>Sign Out</p>
                        </div>
                    </div>
                    <div className='MyAccount-Cont-Context'>
                        <div className='MyAccount-Cont-Context-User'>
                            {_.isEmpty(this.state.pictures) ?
                                <img src={user} alt='' /> :
                                <img src={this.state.pictures.src} alt='' />}
                            <span>
                                <p>Upload photo</p>
                                <input type="file" onChange={this.handleImageChange} />
                            </span>
                        </div>
                        <div className='MyAccount-Cont-Context-Info'>
                            <div>
                                <p>First name</p>
                                <h1>{this.props.userReducerGET !== undefined && this.props.userReducerGET.user.local.name}</h1>
                            </div>
                            <div>
                                <p>Last name</p>
                                <h1>Serobyan</h1>
                            </div>
                            <div>
                                <p>Email</p>
                                <h1>{this.props.userReducerGET !== undefined && this.props.userReducerGET.user.local.email}</h1>
                            </div>
                            <div className='MyAccount-Cont-Context-Info-Edit'>
                                <p>Edit information</p>
                                <NavLink to={{
                                    pathname: `${process.env.PUBLIC_URL}/changepassword`
                                }}>
                                    <p>Change password</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <p onClick={this.deleteUserClick}>Delete Acount</p>
                </div>
            </section>
        )
    }

}
const mapStateToProps = state => {
    return {
        userReducerGET: state.userReducer.userInfo,
        userReducerDELETE: state.userReducer.deleteUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        infoUser: url => dispatch(userInfo(url)),
        userDelete: url => dispatch(deleteUser(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)