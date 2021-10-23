import React from 'react';
import logo from '../../logo-bh.png';
import "../../App.css"
import SavedDrinks from '../SavedDrinks';

export default function Profile({ handlePageChange }) {
    return (
        <div className="App">
            <div className="landingUI">
                <div>
                    <SavedDrinks handlePageChange={handlePageChange} /> 
                </div>
            </div>
        </div>
    );
}