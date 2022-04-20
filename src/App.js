import ListingIndex from './page/listing/index';
import Home from './page/home/index';
import { Routes, Route, useLocation } from "react-router-dom";
import Listing from './page/listing/Listing';
import Header from './page/header';
import { useLayoutEffect } from 'react';
function App() {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <>
            <Header />
            <Routes>
                <Route path="/react-pages" element={<Home />} exec />
                <Route path="/react-pages/list-movie" element={<ListingIndex />} exact />
                <Route path="/react-pages/list-movie/:movieName" element={<Listing />} exact />
            </Routes>
        </>
    );
}

export default App;
