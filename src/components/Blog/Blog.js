import React from 'react'
import Item from './Item'
import './Blog.scss'

class Blog extends React.Component {

    render() {
        return (
            <div className="Blog">
                <div className="Blog-Cont innerWrap">
                    <div className="Blog-Cont-Title">
                        <h1>Blog</h1>
                        <div className="Blog-Cont-Title_content">
                            <p>All articles (76)</p>
                            <p>Recipes (24)</p>
                            <p>Lifestyle (17)</p>
                            <p>Nutrition (12)</p>
                            <p>Inspiration (10)</p>
                            <p>Fitness (8)</p>
                            <p>News (5)</p>
                        </div>
                    </div>
                    <div className="Blog-Cont-Wrap">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => 
                            <Item key={id} id={id} />
                        )}
                    </div>
                    <button>LOad More articles</button>
                </div>
            </div>
        )
    }
}

export default Blog