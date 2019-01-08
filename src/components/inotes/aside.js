import React from 'react';
import './aside.css';
import { connect } from 'react-redux';






class Aside extends React.Component{

    state = {
            Phrase : [
                {
                    text: "He's name is John Cena",
                    id: 0
                   
                },
                {
                    text: 'Have a nice Day ;)',
                    id: 1
                },
                {
                    text: 'Believe in Yourself',
                    id: 2
                },
                {
                    text: 'Just Dance!',
                    id: 3
                },
                {
                    text: 'Dreams come true...',
                    id: 4
                },
                {
                    text: 'Fantastic world :]',
                    id: 5
                },
                {
                    text: 'Development priority',
                    id: 6
                },
                {
                    text: 'No other reasons!',
                    id: 7
                },
                {
                    text: "Unique One <'!'>",
                    id: 8
                },
                {
                    text: "Let's go Home!!!",
                    id: 9
                },
            ],
            newPhrase: '',
    }


    componentDidMount(){
        let max = 10;
        let randomId = (Math.floor(Math.random() * max));
        console.log(randomId);
        this.state.Phrase.map((iterator)=>{
            if(iterator.id === randomId){
                this.setState({newPhrase: iterator.text});
            }
        })
    }

    changePhrase = () =>{
        let max = 10;
        let randomId = (Math.floor(Math.random() * max));
        this.state.Phrase.map((iterator) => {
            if (iterator.id === randomId) {
                this.setState({ newPhrase: iterator.text });
            }
        })
    }

    render() {
        return (
            <div className='div' onClick={this.changePhrase}> 
                <p className='p'>{this.state.newPhrase}</p>
            </div>
        )
    }
}

export default connect(null, null)(Aside);