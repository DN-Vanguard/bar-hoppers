import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Appbar from './components/Appbar';
import Home from './components/pages/Home';

function MainUI() {
    return (
        <Router>
            <>
                <Appbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route render={() => <h1 className='landingUI'>Where you think you are going!?</h1>} />
                </Switch>
            </>
        </Router>
    );
}

export default MainUI;
