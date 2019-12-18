import React from 'react'
import Item from './Item'
import './Blog.scss'

class Blog extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            articles: true,
            recipes: false,
            lifeStyle: false,
            nutrition: false,
            inspiration: false,
            fitnes: false,
            news: false
        }
    }

    handleClick = e => {
        switch (e.target.innerText) {
            case 'All articles (76)':
                this.setState({
                    articles: true,
                    recipes: false,
                    lifeStyle: false,
                    nutrition: false,
                    inspiration: false,
                    fitnes: false,
                    news: false
                })
                break;
            case 'Recipes (24)':
                this.setState({
                    articles: false,
                    recipes: true,
                    lifeStyle: false,
                    nutrition: false,
                    inspiration: false,
                    fitnes: false,
                    news: false
                })
                break;
            case 'Lifestyle (17)':
                this.setState({
                    articles: false,
                    recipes: false,
                    lifeStyle: true,
                    nutrition: false,
                    inspiration: false,
                    fitnes: false,
                    news: false
                })
                break;
            case 'Nutrition (12)':
                this.setState({
                    articles: false,
                    recipes: false,
                    lifeStyle: false,
                    nutrition: true,
                    inspiration: false,
                    fitnes: false,
                    news: false
                })
                break;
            case 'Inspiration (10)':
                this.setState({
                    articles: false,
                    recipes: false,
                    lifeStyle: false,
                    nutrition: false,
                    inspiration: true,
                    fitnes: false,
                    news: false
                })
                break
            case 'Fitness (8)':
                this.setState({
                    articles: false,
                    recipes: false,
                    lifeStyle: false,
                    nutrition: false,
                    inspiration: false,
                    fitnes: true,
                    news: false
                })
                break
            case 'News (5)':
                this.setState({
                    articles: false,
                    recipes: false,
                    lifeStyle: false,
                    nutrition: false,
                    inspiration: false,
                    fitnes: false,
                    news: true
                })
                break
        }
    }

    render() {
        return (
            <div className="Blog">
                <div className="Blog-Cont innerWrap">
                    <div className="Blog-Cont-Title">
                        <h1>Blog</h1>
                        <div className="Blog-Cont-Title_content">
                            <p onClick={this.handleClick} className={`${this.state.articles && 'isActiveBlog'}`}>All articles (76)</p>
                            <p onClick={this.handleClick} className={`${this.state.recipes && 'isActiveBlog'}`}>Recipes (24)</p>
                            <p onClick={this.handleClick} className={`${this.state.lifeStyle && 'isActiveBlog'}`}>Lifestyle (17)</p>
                            <p onClick={this.handleClick} className={`${this.state.nutrition && 'isActiveBlog'}`}>Nutrition (12)</p>
                            <p onClick={this.handleClick} className={`${this.state.inspiration && 'isActiveBlog'}`}>Inspiration (10)</p>
                            <p onClick={this.handleClick} className={`${this.state.fitnes && 'isActiveBlog'}`}>Fitness (8)</p>
                            <p onClick={this.handleClick} className={`${this.state.news && 'isActiveBlog'}`}>News (5)</p>
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