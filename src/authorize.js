import React from 'react';
import './index.css';
import './adaptive.css';
import { NavLink } from 'react-router-dom';
import { googleAuthProvider, database, firebaseApp } from './firebase';
import createHistory from 'history/createBrowserHistory';
import logUser from './actions/action1';
import { connect } from 'react-redux';
import { store } from './index';


const history = createHistory;

class Authorize extends React.Component {

    state = {
        currentUser: null,
    }

    authentificate = () => {
        firebaseApp.auth().signInWithPopup(googleAuthProvider);
    }
    addUsertoBase = () => {
        database.ref().child(this.state.currentUser.uid).child('name').set(this.state.currentUser.displayName);
        database.ref().child(this.state.currentUser.uid).child('email').set(this.state.currentUser.email);
        database.ref().child(this.state.currentUser.uid).child('notes').set('NOTES');
        database.ref().child(this.state.currentUser.uid).child('stories').set('STORIES');
        // console.log(this.state.currentUser.displayName);
        store.dispatch(logUser(this.state.currentUser.displayName));
    }

    componentDidMount() {
        firebaseApp.auth().onAuthStateChanged((currentUser) => {
            this.setState({ currentUser });
        })
        // if (this.state.currentUser !== null) {
        //     history.push('/home');
        // }
    }


    render() {
        return (
            <div className="login-container">
                <div className="autorow">
                    <div className="login-form-1">
                        <h3 className='authH3'>Let's Do It Together</h3>
                        {this.state.currentUser === null ?
                            <div className="form-group">
                                <button className='btnSubmit' onClick={this.authentificate}>Log In</button>
                            </div>
                            :
                            <div className="form-group">
                                <NavLink className="" to='/home' exact><button className='btnSubmit' onClick={this.addUsertoBase}>Start now</button></NavLink>
                            </div>
                        }

                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    // console.log('STATE', state);
    return {
    }
}

export default connect(mapStateToProps, null)(Authorize);