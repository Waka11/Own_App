import React from 'react';
import '../../index.css';
import '../../adaptive.css';



class NewsItem extends React.Component {

    newsHandlerItem = () => {
        const properties = this.props;
        const pathName = this.props.pathName;
        const itemPath = pathName + '/' + this.props.publishedAt;
        this.props.newsHandler(itemPath, properties);
    }


    render() {
            return (
                <div className='news'>
                    <div className='newsList'>
                        <div className='newsDiv'><p  onClick={this.newsHandlerItem} className='newsP'>{this.props.title}</p></div>
                    </div>
                </div>
            )
    }







}



export default NewsItem;
