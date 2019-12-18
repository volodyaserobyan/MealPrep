import React from 'react'
import messageItem from '../../assets/images/VectorMessage.svg'

class Comments extends React.Component {

    render() {
        return (
            <div className="BlogComplete-Cont-Comments">
                <div className="BlogComplete-Cont-Comments-Title">
                    <div className="BlogComplete-Cont-Comments-Title_icon">
                        <img src={messageItem} />
                    </div>
                    <h1>Comments 4</h1>
                </div>
                <div className="BlogComplete-Cont-Comments-Item">
                    <div className="BlogComplete-Cont-Comments-Item_name">
                        <p className="BlogComplete-Cont-Comments-Item_name_1">Marina</p>
                        <p className="BlogComplete-Cont-Comments-Item_name_2">Nov 30, 2019 16:47</p>
                    </div>
                    <p className="BlogComplete-Cont-Comments-Item_context">Sint sit magna duis labore commodo elit consectetur consectetur.  Aute quis id dolor duis pariatur culpa consequat consequat eu proident enim. Velit magna anim nulla incididunt et anim elit.</p>
                    <p className="BlogComplete-Cont-Comments-Item_reply">Reply</p>
                </div>
                <div className="BlogComplete-Cont-Comments-Item">
                    <div className="BlogComplete-Cont-Comments-Item_name">
                        <p className="BlogComplete-Cont-Comments-Item_name_1">Marina</p>
                        <p className="BlogComplete-Cont-Comments-Item_name_2">Nov 30, 2019 16:47</p>
                    </div>
                    <p className="BlogComplete-Cont-Comments-Item_context">Sint sit magna duis labore commodo elit consectetur consectetur.  Aute quis id dolor duis pariatur culpa consequat consequat eu proident enim. Velit magna anim nulla incididunt et anim elit.</p>
                    <p className="BlogComplete-Cont-Comments-Item_reply">Reply</p>
                </div>
                <div className="BlogComplete-Cont-Comments-Item">
                    <div className="BlogComplete-Cont-Comments-Item_name">
                        <p className="BlogComplete-Cont-Comments-Item_name_1">Marina</p>
                        <p className="BlogComplete-Cont-Comments-Item_name_2">Nov 30, 2019 16:47</p>
                    </div>
                    <p className="BlogComplete-Cont-Comments-Item_context">Sint sit magna duis labore commodo elit consectetur consectetur.  Aute quis id dolor duis pariatur culpa consequat consequat eu proident enim. Velit magna anim nulla incididunt et anim elit.</p>
                    <p className="BlogComplete-Cont-Comments-Item_reply">Reply</p>

                    <div className="BlogComplete-Cont-Comments-Item reply">
                        <div className="BlogComplete-Cont-Comments-Item_name">
                            <p className="BlogComplete-Cont-Comments-Item_name_1">Marina</p>
                            <p className="BlogComplete-Cont-Comments-Item_name_2">Nov 30, 2019 16:47</p>
                        </div>
                        <p className="BlogComplete-Cont-Comments-Item_context">Sint sit magna duis labore commodo elit consectetur consectetur.  Aute quis id dolor duis pariatur culpa consequat consequat eu proident enim. Velit magna anim nulla incididunt et anim elit.</p>
                        <p className="BlogComplete-Cont-Comments-Item_reply">Reply</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Comments