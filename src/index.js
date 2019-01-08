import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { firebaseApp } from './firebase';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './reducers/reducers';

export const store = createStore(Reducer);

class App extends React.Component {


    render() {
        return (
            <div>
                <Provider store={store}>
                    <BrowserRouter>
                        <Router />
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }

}


ReactDOM.render(<App />, document.getElementById('root'));

firebaseApp.auth().onAuthStateChanged((user) => {
    if (user) {
        // console.log("IS USER", user);
        // console.log('userName', user.displayName);
    }
    else { console.log("NO USER") }
})