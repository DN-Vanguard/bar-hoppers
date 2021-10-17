import React from 'react';
import logo from '../../logo.svg';
import "../../App.css"

export default function Favorite() {
    return (
        <div className="App">
            <div className="landingUI">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This is Favorite
                </p>
            </div>
        </div>
    );
}