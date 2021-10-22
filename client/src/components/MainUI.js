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
import DrinkDetail from './pages/DrinkDetail';
import Search from './pages/Search';


function MainUI() {
    const [currentPage, setCurrentPage] = useState("Home");
    const [query, setQuery] = useState();

    const renderPage = () => {
        if (currentPage === "Home") {
            return <Home currentPage={currentPage} handlePageChange={handlePageChange}/>;
        }
        if (currentPage === "Profile") {
            return <Profile currentPage={currentPage} handlePageChange={handlePageChange}/>;
        }
        if (currentPage === "Favorite") {
            return <Favorite currentPage={currentPage} handlePageChange={handlePageChange}/>;
        }
        if (currentPage === "Map") {
            return <Map currentPage={currentPage} handlePageChange={handlePageChange}/>;
        }
        if (currentPage === "Suggested") {
            return <Suggested currentPage={currentPage} handlePageChange={handlePageChange}/>;
        }
        if (currentPage === "Letter") {
            return <Letter currentPage={currentPage} handlePageChange={handlePageChange}/>;
        }
        if (currentPage === "Ingredient") {
            return <Ingredient currentPage={currentPage} handlePageChange={handlePageChange}/>;
        }
        if (currentPage === "Glass") {
            return <Glass currentPage={currentPage} handlePageChange={handlePageChange}/>;
        }
        if (currentPage === "Category") {
            return <Category currentPage={currentPage} handlePageChange={handlePageChange}/>;
        }
        if (currentPage === "Type") {
            return <Type currentPage={currentPage} handlePageChange={handlePageChange}/>;
        }
        if (currentPage === "Random") {
            return <Random currentPage={currentPage} handlePageChange={handlePageChange}/>;
        }
        if (currentPage === "Contact") {
            return <Contact currentPage={currentPage} handlePageChange={handlePageChange}/>;
        }
        if (currentPage === "Search") {
            return <Search currentPage={currentPage} handlePageChange={handlePageChange} query={query} />
        }
        if (currentPage.match(/^\d{5,6}$/)) {
            return <DrinkDetail drinkID={currentPage} />
        }
    };

 

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Appbar currentPage={currentPage} handlePageChange={handlePageChange} setQuery={setQuery}/>
            {renderPage()}
            <BottomNav currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}

export default MainUI;
