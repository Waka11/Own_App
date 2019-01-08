import React from 'react';
import Nav from '../nav';
import '../index.css';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';





class Home extends React.Component {
    state = {
        imgs: [
            {
                id: 0,
                src: "https://media.giphy.com/media/kRkJXYahXjSE0/giphy.gif",
                alt: "Captain",
            },
            {
                id: 1,
                src: "https://media.giphy.com/media/KZd26L2o8QXtK/giphy.gif",
                alt: "Joker",
            },
            {
                id: 2,
                src: "https://media.giphy.com/media/sfvVcEvsC6BoI/giphy.gif",
                alt: "Ventura",
            },
        ],
        newSrc: '',
        newId: '',
        newAlt: '',
    }


    changeImg = () => {
        let max = 3;
        let randomId = (Math.floor(Math.random() * max));
        this.state.imgs.map((iterator) => {
            if (iterator.id === randomId) {
                this.setState({ newId: iterator.id, newSrc: iterator.src, newAlt: iterator.alt });
            }
        })
    }

    componentDidMount = () => {
        this.changeImg();
    }

    render() {
        // console.log(this.props.user);
        return (
            <div className='about'>
                <Nav />
                <div className='about-content'>
                    <div className='about-motiv' onClick={this.changeImg}>
                        <p className='about-motiv2'>If You have already visited this Page, then know --> You're Awesome!!!</p>
                    </div>
                    <img src={this.state.newSrc} alt={this.state.newAlt} className='about-img' />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.Reducer,
    }
}

export default connect(mapStateToProps, null)(Home);