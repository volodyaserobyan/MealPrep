import React from 'react'
import { connect } from 'react-redux';
import messageItem from '../../assets/images/VectorMessage.svg'
import fbIcon from '../../assets/images/FB-Vector.svg'
import TwitIcon from '../../assets/images/bx_bxl-twitter.svg'
import CopyIcon from '../../assets/images/bx_bx-link.svg'
import FavIcon from '../../assets/images/Fav.svg'
import BlogCompleteContext from './BlogCompleteContext'
import Item from './Item'
import OwlCarousel from 'react-owl-carousel';
import Comments from './Comments'

import './BlogComplete.scss'

let _ = require('lodash')

class BlogComplete extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            mail: "",
            website: "",
            comment: "",
            responsive: {
                0: {
                    items: 1,
                },
                588: {
                    items: 2,
                },
                758: {
                    items: 3,
                }
            },
        }
    }

    handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        })
    }

    render() {
        if (!_.isEmpty(this.props.blogItemReducer)) {
            return (
                <>
                    <section className="BlogComplete">
                        <div className="BlogComplete-Cont">
                            <h1 className="BlogComplete-Cont_title">{this.props.blogItemReducer.blog.title}</h1>
                            <div className="BlogComplete-Cont-Media">
                                <div className="BlogComplete-Cont-Media_date">
                                    <div className="BlogComplete-Cont-Media_date_type">
                                        <p className="BlogComplete-Cont-Media_date_type_1">Added</p>
                                        <p className="BlogComplete-Cont-Media_date_type_2">Now 28, 2019</p>
                                        <p className="BlogComplete-Cont-Media_date_type_1">in</p>
                                        <p className="BlogComplete-Cont-Media_date_type_4">{this.props.blogItemReducer.blog.type}</p>
                                    </div>
                                    <div className="BlogComplete-Cont-Media_date_message">
                                        <img src={messageItem} />
                                        <p>4</p>
                                    </div>
                                </div>
                                <div className="BlogComplete-Cont-Media_icons">
                                    <p className="BlogComplete-Cont-Media_icons_fb"><img src={fbIcon} />Share</p>
                                    <p className="BlogComplete-Cont-Media_icons_tweet"><img src={TwitIcon} />Tweet</p>
                                    <p className="BlogComplete-Cont-Media_icons_copy"><img src={CopyIcon} />Copy</p>
                                    <p className="BlogComplete-Cont-Media_icons_fav"><img src={FavIcon} /></p>
                                </div>
                            </div>
                            <BlogCompleteContext />
                            <div className="BlogComplete-Cont-Recommend">
                                <p>Coffee</p>
                                <p>Cinnamon</p>
                                <p>Morning Cup</p>
                                <p>Ghee</p>
                                <p>Healthy Coffee</p>
                            </div>
                            <Comments />
                            <form className="BlogComplete-Cont-LeaveComment">
                                <h1>Leave a comment</h1>
                                <div className="BlogComplete-Cont-LeaveComment_inputs">
                                    <input name="Name" placeholder="Name*" value={this.state.name} onChange={this.handleChange} />
                                    <input name="mail" placeholder="E-mail*" value={this.state.mail} onChange={this.handleChange} />
                                    <input name="website" placeholder="Website" value={this.state.website} onChange={this.handleChange} />
                                </div>
                                <textarea name="comment" placeholder="Your Comment" value={this.state.comment} onChange={this.handleChange} />
                                <input type="submit" className="BlogComplete-Cont-LeaveComment_submit" value="POST COMMENT" />
                            </form>
                        </div>
                    </section>
                    <section className="BlogComplete-Similar">
                        <div className="BlogComplete-Similar-Cont innerWrap">
                            <h1>Similar Articles</h1>
                            <OwlCarousel
                                className="owl-theme"
                                items={3}
                                dots={true}
                                nav
                                responsiveClass={true}
                                responsive={this.state.responsive}
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => <Item key={id} id={id} />)}
                            </OwlCarousel>
                        </div>
                    </section>
                </>
            )
        }
        else {
            return (
                <div>Not Found</div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        blogItemReducer: state.blogItemReducer
    };
}

export default connect(mapStateToProps)(BlogComplete);