import React from 'react'
import User1 from '../../assets/images/EllipseUser 1 (3).svg'
import User2 from '../../assets/images/EllipseUser 2 (3).svg'
import User3 from '../../assets/images/EllipseUser 3 (3).svg'
import star from '../../assets/images/VectorStar.png'
import './Item.scss'

class Item extends React.Component {

    render() {
        return (
            <section className="Clients-Item">
                <div className="Clients-Item-Cont">
                    <p className="Clients-Item-Cont_context">“Exercitation ex nisi amet consequat minim veniam velit laborum labore ullamco laboris dolor.
                         Fugiat incididunt irure est id aliqua duis sit consequat est. Adipisicing ullamco consequat
                          laboris proident labore exercitation excepteur enim sint qui.”</p>
                    <div className="Clients-Item-Cont_user">
                        <div className="Clients-Item-Cont_user_wrapper">
                            <img src={User1} />
                            <div className="Clients-Item-Cont_user_wrapper_info">
                                <h1 className="Clients-Item-Cont_user_wrapper_info_name">Bruce Watson</h1>
                                <p className="Clients-Item-Cont_user_wrapper_info_work">Blogger</p>
                            </div>
                        </div>
                        <div className="Clients-Item-Cont_user_star">
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Item