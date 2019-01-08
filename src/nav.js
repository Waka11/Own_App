import React from 'react';
import { NavLink } from 'react-router-dom';
import {firebaseApp} from './firebase';
import { store } from './index';
import logUser from './actions/action1';
import { connect } from 'react-redux';
import './index.css';
import './adaptive.css';

class Nav extends React.Component {

LogOut = () =>{
    firebaseApp.auth().signOut();
}

componentDidMount(){
    firebaseApp.auth().onAuthStateChanged((user) => {
        if (user) {
            // console.log("IS USER", user);
            // console.log('userName', user.displayName);
            store.dispatch(logUser(user.displayName));
        }
        else { console.log("NO USER") }
    })
    store.dispatch(logUser(this.props.user.displayName));

}

    render() {
        return (
            <nav className=''>
                <ul className="nav logo">
                    <div className='navRight'>
                        <b className='navDisplayName'>
                            {this.props.user.displayName}
                        </b>
                        <div className='LogOut'><NavLink to='/' exact className='nav-link'><button onClick={this.LogOut} className='btnSubmit LogOut'>Log Out</button></NavLink></div>
                    </div>
                    <div className='inLogo'>
                        <li className='nav-item'>
                            <NavLink to='/home' exact className='nav-link'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/notes' exact className='nav-link'>Note</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/diary' exact className='nav-link'>Diary</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/news' exact className='nav-link'>News</NavLink>
                        </li>
                    </div>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.Reducer,
    }
}

export default connect(mapStateToProps, null)(Nav);