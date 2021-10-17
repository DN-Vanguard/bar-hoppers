import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Appbar from './components/Appbar';
import BottomNav from './components/BottomNav';
import Favorite from './components/pages/Favorite';
import Home from './components/pages/Home';
import Map from './components/pages/Map';
import Profile from './components/pages/Profile';

function MainUI() {
    return (
        <Router>
            <>
                <Appbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/favorite' component={Favorite} />
                    <Route exact path='/map' component={Map} />
                    <Route render={() => <h1 className='landingUI'>Where you think you are going!?</h1>} />
                </Switch>
                <BottomNav />
            </>
        </Router>
    );
}

export default MainUI;
