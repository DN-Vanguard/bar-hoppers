import React, { useState } from 'react';
import Appbar from './Appbar';
import BottomNav from './BottomNav';
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import Map from './pages/Map';
import Profile from './pages/Profile';
import Suggested from './pages/Suggested';
import Letter from './pages/Letter';
import Ingredient from './pages/Ingredient';
import Glass from './pages/Glass';
import Category from './pages/Category';
import Type from './pages/Type';
import Random from './pages/Random';
import Contact from './pages/Contact';


function MainUI() {
    const [currentPage, setCurrentPage] = useState("Home");

    const renderPage = () => {
        if (currentPage === "Home") {
            return <Home currentPage={currentPage} handlePageChange={handlePageChange}/>;
        }
        if (currentPage === "Profile") {
            return <Profile />;
        }
        if (currentPage === "Favorite") {
            return <Favorite />;
        }
        if (currentPage === "Map") {
            return <Map />;
        }
        if (currentPage === "Suggested") {
            return <Suggested />;
        }
        if (currentPage === "Letter") {
            return <Letter />;
        }
        if (currentPage === "Ingredient") {
            return <Ingredient />;
        }
        if (currentPage === "Glass") {
            return <Glass />;
        }
        if (currentPage === "Category") {
            return <Category />;
        }
        if (currentPage === "Type") {
            return <Type />;
        }
        if (currentPage === "Random") {
            return <Random />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
    };

 

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Appbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <BottomNav currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}

export default MainUI;
