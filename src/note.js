import React from 'react';
import './index.css';
import createReactClass from 'create-react-class';
import TextArea from './components/inotes/textArea';
import AppList from './components/inotes/appList';
import Aside from './components/inotes/aside';
import './adaptive.css';
import Nav from './nav';
import { connect } from 'react-redux';



const Note = createReactClass({

    getInitialState() {
        return {
            notes: [],
            noteItem: "noDel",
        }
    },

    componentDidUpdate: function () {
        let note = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', note);
    },


    componentDidMount: function () {
        let LS = JSON.parse(localStorage.getItem('notes'));
        if (LS) {
            this.setState({
                notes: LS,
            });
        }
    },


    HandlerAddNewNote(newNote) {
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes })
    },

    render() {
        return (
            <div>
                <Nav />
                <div className='Main'>
                    <div className='content'>
                        <TextArea onAddNotes={this.HandlerAddNewNote} key={this.state.id} noteItem={this.state.noteItem} textAreaChange={this.textAreaChange} />
                        <AppList notes={this.state.notes} delete={this.delete} className='appList' />
                    </div>
                    <Aside className='aside' />
                </div>
            </div>
        )
    },


    delete: function (e) {
        let oldState = this.state.notes;

        let changeSt = oldState.filter(iterator => {
            if (iterator.id !== e) {
                return (iterator);
            } else {
                return ("");
            }
        });
        this.setState({ notes: changeSt, noteItem: 'Note has been removed' });
    },


    textAreaChange: function (e) {
        if (e) {
            this.setState({ noteItem: e })
        }
    }

})

const mapStateToProps = (state) => {
    return {
        user: state.Reducer,
    }
}

export default connect(mapStateToProps, null)(Note);