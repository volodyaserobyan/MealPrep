import React from 'react'
import Rectangle1 from '../../assets/images/Rectangle 18.svg'
import Rectangle2 from '../../assets/images/Rectangle 19.svg'
import Rectangle3 from '../../assets/images/Rectangle 20.svg'
import Rec1 from '../../assets/images/Rectangle 18 (1).svg'
import Rec2 from '../../assets/images/Rectangle 19 (1).svg'
import Rec3 from '../../assets/images/Rectangle 20 (1).svg'
import { connect } from 'react-redux'
import { ABOUTUSGETMEMBERSURL } from '../../const/ConstUrls'
import { getMembersAboutUs } from '../../action/Action'
import './About.scss'

let _ = require('lodash')

class About extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isSuccess: false
        }
    }

    componentDidMount() {
        this.props.getMembersAbout(ABOUTUSGETMEMBERSURL)
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            if (!_.isEmpty(nextProps.aboutUsReducerGET)) {
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
                    ...Loading
                </div>
            )
        }
        console.log(this.props.aboutUsReducerGET)
        return (
            <>
                <div className="SearchAbout">
                    <h1 className="SearchAbout-Title">About US</h1>
                    <p className="SearchAbout-Content">Most loved meals delivery system, delivers fresh meals and recipes at your doorstep</p>
                </div>
                <div className="About">
                    <div className="About-Cont innerWrap">
                        <div className="About-Cont-Who">
                            <div className="About-Cont-Who_title">
                                <h1>WHO WE ARE</h1>
                                <p>We help you save time while you enjoy real home cooking and the joy that comes with it. At YoMeals, we push for
                                the highest-quality ingredients so we
                                can craft nutrient-rich meals and deliver them right to your doorstep, fresh and ready to eat. We understand how busy you could
                                be out there making things
                                happen. That’s why we create great-tasting, wholesome food that’s both healthy and satisfying, no matter how busy you are. Fugiat qui
                                consectetur est
                                     eiusmod ipsum. Dolore ex labore nulla voluptate cillum. Eiusmod proident exercitation consectetur quis anim ut cillum ad pariatur.</p>
                            </div>
                            <div className="About-Cont-Who_images">
                                <div className="About-Cont-Who_images_1">
                                    <img src={Rectangle1} />
                                    <img src={Rectangle3} />
                                </div>
                                <div className="About-Cont-Who_images_2">
                                    <img src={Rectangle2} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="About-Team">
                        <div className="About-Team-Cont innerWrap">
                            <h1 className="About-Team-Cont_title">OUR TEAM</h1>
                            <div className="About-Team-Cont_grid">
                                {this.props.aboutUsReducerGET.map(item =>
                                    <div key={item._id} className="About-Team-Cont_grid_person">
                                        <img src={item.avatar} alt='' />
                                        <h1>{item.name}</h1>
                                        <p>{item.desc}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="About-Mission About-Cont innerWrap">
                        <div className="About-Mission-Cont innerWrap">
                            <div className="About-Mission-Cont_img">
                                <div className="About-Mission-Cont_img_1">
                                    <img src={Rec1} />
                                    <img src={Rec2} />
                                </div>
                                <img src={Rec3} />
                            </div>
                            <div className="About-Mission-Cont_context">
                                <h1>OUR MISSION</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt mattis amet sodales orci sapien. Pellentesque odio sed platea id.
                                Nunc massa eu consequat, vitae, mi. Semper feugiat purus non rhoncus. Aliquam at at morbi praesent viverra dolor. Eget et eget quis risus
                                malesuada elit
                                posuere commodo. Volutpat cras justo, feugiat donec enim hendrerit etiam in. Pharetra, adipiscing eget enim eget sapien. Cursus semper lacus
                                nibh id quam in
                                pulvinar iaculis urna. Enim pellentesque at lobortis ut. Ac nisi, quis scelerisque scelerisque
                                 vehicula. Eros etiam cursus sed ut eu lobortis. Odio velit vel suscipit non. Nulla cursus urna sollicitudin quis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        aboutUsReducerGET: state.aboutUsReducer.members
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMembersAbout: url => dispatch(getMembersAboutUs(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)