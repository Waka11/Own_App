import React from 'react';
import './index.css';
import './adaptive.css';
import Nav from './nav';
import NewsItem from './components/inews/newsitem';
import { connect } from 'react-redux';
import { store } from './index';


class News extends React.Component {

    state = {
        news: [

        ],
        isLoaded: false,
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=b235b608bf1149f5af92f46975273b78')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    news: json,
                })
            })
    }

    newsHandler = (path, properties) => {
        // console.log('path', path)
        console.log('properties', properties)
        this.props.history.push({
            pathname: `${path}`,
            properties: properties,
        });
    }



    render() {
        console.log(this.state.news.articles);
        const { isLoaded, news } = this.state;
        return (
            <div className='news'>
                <Nav />
                {!isLoaded ?
                    <div className='newsLoad'>
                        <div className='newsLoadDiv'>L o a d i n g  . . .</div>
                    </div>
                    :
                    <div className='newsListDiv'>
                        {this.state.news.articles.map((iterator) => {
                            return (
                                <NewsItem {...this.props} key={iterator.publishedAt} title={iterator.title} publishedAt={iterator.publishedAt} urlToImage={iterator.urlToImage} url={iterator.url} content={iterator.content} pathName={this.props.match.path} newsHandler={this.newsHandler}/>
                            )
                        })}
                    </div>
                }
            </div>

        )




    }
}

const mapStateToProps = (state) => {
    return {
        user: state.Reducer,
    }
}


export default connect(mapStateToProps, null)(News);
