import React from 'react';
import '../../index.css';
import '../../adaptive.css';
import Nav from '../../nav';


class NewsDetail extends React.Component {



    render() {
        console.log('props', this.props.location)
        const Props = this.props.location.properties;
        console.log(this.props.location.properties);
        return (
            <div>
                <Nav />
                {Props === undefined ?
                    <div className='newsLoad'>
                        <div className='newsLoadDiv'>O o o o p s  . . .</div>
                    </div>
                    :
                    <div className='newsDet'>
                        <p>{Props.title}</p>
                        <div className='newsDetDiv'>
                            <div className='newsDetDivContent'>
                                {Props.content}
                            </div>
                            <div className='newsDetDivImg'>
                            <img src={Props.urlToImage} alt={Props.author} className='newsDetImg'/>   
                            </div>
                        </div>
                        <div className='newsDetDivGoTo'>For more information, please move this link to URL line: &nbsp;&nbsp;&nbsp; <b><a href={Props.url} target="_blank" className='newsDetUrl'>{Props.url}</a></b></div>
                    </div>
                }

            </div>
        )
    }




}



export default NewsDetail;
