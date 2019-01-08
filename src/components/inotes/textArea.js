import React from 'react';
import createReactClass from 'create-react-class';
import './textArea.css';
import '../../adaptive.css';
// import { database } from '../../firebase';
// import { connect } from 'react-redux';


const TextArea = createReactClass({

    getInitialState() {
        return {
            text: '',
            id: '',
            error: "Note hasn't been written",
            colorError: '',
        }
    },

    componentWillReceiveProps(nextProps) {
        if (nextProps.noteItem === "Note has been removed") {
            this.removing();
        };
    },

    removing: function () {
        this.setState({
            error: 'Note has been removed',
            colorError: 'red',
        })
    },

    handlerChange: function (event) {
        this.setState({
            text: event.target.value,
            error: 'Note is in process',
            colorError: 'orange',
        })
        // database.ref().child(this.props.user.uid).child('notes').set(this.state.notes.text);
        if (event.target.value < 1) {
            this.setState({
                error: 'Please, continue writing the Note',
                colorError: 'violet',
            })
        }

    },


    Posting: function () {
        if (this.state.text) {
            let newnotes = {
                text: this.state.text,
                color: "gray",
                id: Date.now().toString(),
                time: new Date().toLocaleTimeString(),
                day: new Date().getUTCDate(),
                month: new Date().getUTCMonth() + 1,
                year: new Date().getUTCFullYear(),
            }
            this.props.onAddNotes(newnotes);
        }

        if (this.state.text.length === 0) {
            this.setState({
                error: "Empty Note",
                colorError: "red",
            })
        }
        else if (this.state.text.length > 0) {
            this.setState({
                error: "Note has been Posted",
                colorError: "green",
            })
        }
        else { this.setState({ error: "" }) }
    },



    
    render() {
        return (
            <div className='face'>
                <label>Write Your Note</label>
                <div className=''>
                    <textarea ref='textarea' onChange={this.handlerChange} className='ta textArea' />
                </div>
                <p style={{ color: this.state.colorError }}>{this.state.error}</p>
                <button className='button' onClick={this.Posting}>OK</button>
            </div>
        )
    },


})

// const mapStateToProps = (state) => {
//     return {
//         user: state.Reducer,
//     }
// }

// export default connect(mapStateToProps, null)(TextArea);
export default TextArea;