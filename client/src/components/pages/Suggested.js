import React from 'react';
import logo from '../../logo-bh.png';
import "../../App.css"

export default function Suggested() {
    return (
        <div className="App">
            <div className="landingUI">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This is Suggested Drink
                </p>
            </div>
        </div>
    );
}