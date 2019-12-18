import React from 'react'
import ImgBlog from '../../assets/images/ImgBlog.svg'
import ImgBlog1 from '../../assets/images/ImgBlog(1).svg'
import ImgBlog2 from '../../assets/images/ImgBlog(2).svg'
import ImgBlog3 from '../../assets/images/ImgBlog(3).svg'
import ImgBlog4 from '../../assets/images/ImgBlog(4).svg'
import ImgBlog5 from '../../assets/images/ImgBlog(5).svg'
import ImgBlog6 from '../../assets/images/ImgBlog(6).svg'
import ImgBlog7 from '../../assets/images/ImgBlog(7).svg'
import ImgBlog8 from '../../assets/images/ImgBlog(8).svg'
import messageItem from '../../assets/images/VectorMessage.svg'

import './Item.scss'

class Item extends React.Component {

    render() {
        let img
        switch (this.props.id) {
            case 1:
                img = ImgBlog
                break;
            case 2:
                img = ImgBlog1
                break;
            case 3:
                img = ImgBlog2
                break;
            case 4:
                img = ImgBlog3
                break;
            case 5:
                img = ImgBlog4
                break;
            case 6:
                img = ImgBlog5
                break;
            case 7:
                img = ImgBlog6
                break;
            case 8:
                img = ImgBlog7
                break;
            case 9:
                img = ImgBlog8
                break;

            default:
                break;
        }
        return (
            <section className="Blog-Item">
                <div className="Blog-Item_img">
                    <img src={img} />
                </div>
                <div className="Blog-Item-Wrapper">
                    {/* <div className="Blog-Item-Wrapper_type">

                    </div> */}
                    <p className="Blog-Item-Wrapper_type">Recipes</p>
                    <h1 className="Blog-Item-Wrapper_title">Quick Spaghetti & Beef Marinara Recipe</h1>
                    <p className="Blog-Item-Wrapper_context">Spaghetti and Marinara is such a classic dinner meal that it would be unwise to not to provide you...</p>
                    <div className="Blog-Item-Wrapper_date">
                        <p>Nov 28, 2019</p>
                        <div className="Blog-Item-Wrapper_date_message">
                            <img src={messageItem} />
                            <p>4</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Item
