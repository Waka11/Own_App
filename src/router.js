import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Diary from './components/diary';
import Note from './note';
import NotFound from './notfound';
import News from './news';
import NewsDetail from './components/inews/newsdetail';
import Authorize from './authorize';


class Router extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact component={Authorize} />                   
                    <Route path='/home' exact component={Home}/>                   
                    <Route path="/news" exact component={News} />
                    <Route path="/diary" exact component={Diary} />
                    <Route path="/notes" exact component={Note} />
                    <Route path='/news/:publishedAt'exact component={NewsDetail}/>                   
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}


export default Router;