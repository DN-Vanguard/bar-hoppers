import React from 'react';
// import logo from '../../logo-bh.png';
import "../../App.css";
import SavedDrinks from '../SavedDrinks';

export default function Favorite({ handlePageChange }) {
    return (
        <div className="FavoritePageUI">
            <div>
                <h3>My Favorites</h3>
                <div>
                    <SavedDrinks handlePageChange={handlePageChange} /> 
                </div>
            </div>
        </div>
    );
}