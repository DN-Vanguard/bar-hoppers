import React from 'react';
import logo from '../../logo.svg';
import "../../App.css"

export default function Home() {
    return (
        <div className="App">
            <div className="landingUI">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This is Home
                </p>
            </div>
        </div>
    );
}