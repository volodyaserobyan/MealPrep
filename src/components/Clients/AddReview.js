import React from 'react'
import disabledStar from '../../assets/images/disabledStar.png'
import activeStar from '../../assets/images/VectorStar.png'
import './AddReview.scss'

class AddReview extends React.Component {

    render() {
        return (
            <section className='AddReview'>
                <div className='AddReview-Cont innerWrap'>
                    <h1>Add a review</h1>
                    <form className='AddReview-Cont-Form'>
                        <div className='AddReview-Cont-Form-User'>
                            <div>
                                <p>Full Name</p>
                                <input className='AddReview-Cont-Form-User-Simp' />
                            </div>
                            <div>
                                <p>Your Review</p>
                                <textarea />
                            </div>
                            <input type='submit' className='AddReview-Cont-Form-User-Submit' />
                        </div>
                        <div className='AddReview-Cont-Form-Rating'>
                            <p>Rating</p>
                            <div className='AddReview-Cont-Form-Rating-Star'>
                                {[1, 2, 3, 4].map(id => <img src={disabledStar} alt='' />)}
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default AddReview