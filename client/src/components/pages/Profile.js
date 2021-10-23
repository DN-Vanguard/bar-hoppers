import React from 'react';
import logo from '../../logo-bh.png';
import "../../App.css"
import SavedDrinks from '../SavedDrinks';

export default function Profile() {
    return (
        <div className="App">
            <div className="landingUI">
            <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This is YOU.
                </p>
            </div>
        </div>
    );
}