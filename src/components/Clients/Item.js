import React from 'react'
import User1 from '../../assets/images/EllipseUser 1 (3).svg'
import User2 from '../../assets/images/EllipseUser 2 (3).svg'
import User3 from '../../assets/images/EllipseUser 3 (3).svg'
import star from '../../assets/images/VectorStar.png'
import './Item.scss'

class Item extends React.Component {

    constructor(props) {
        super(props)

        this.ratings = []
    }

    componentDidMount() {
        this.ratings.length = 0
    }

    render() {
        for(let i = 1; i <= this.props.item.rating; i++) {
            this.ratings.push(i)
        }
        return (
            <section className="Clients-Item">
                <div className="Clients-Item-Cont">
                    <p className="Clients-Item-Cont_context">{this.props.item.text}</p>
                    <div className="Clients-Item-Cont_user">
                        <div className="Clients-Item-Cont_user_wrapper">
                            <img src={User1} />
                            <div className="Clients-Item-Cont_user_wrapper_info">
                                <h1 className="Clients-Item-Cont_user_wrapper_info_name">{this.props.item.user !== null ? this.props.item.user.name: 'User Deleted'}</h1>
                                <p className="Clients-Item-Cont_user_wrapper_info_work">Blogger</p>
                            </div>
                        </div>
                        <div className="Clients-Item-Cont_user_star">
                            {this.ratings.map(item => <img src={star} alt='' key={item} />)}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Item