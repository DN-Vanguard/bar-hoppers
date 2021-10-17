import React from 'react';
import logo from '../../logo.svg';
import "../../App.css"

export default function Profile() {
    return (
        <div className="App">
            <div className="landingUI">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This is Profile
                </p>
            </div>
        </div>
    );
}