import React from 'react';
import logo from '../../logo-bh.png';
import "../../App.css"
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';

export default function Profile() {
    const {loading, error, data} = useQuery(GET_ME)
    if (error) {
        console.error(error)
    }
    const userData = data?.me;

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <div className="App">
            <div className="landingUI">
            <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This is YOU.
                </p>
                <p>
                    <b>Username:</b> {userData.username}
                </p>
                <p>
                    <b>Email:</b> {userData.email}
                </p>
            </div>
        </div>
    );
}