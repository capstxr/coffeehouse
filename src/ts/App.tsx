import React, { useEffect } from 'react';
import AOS from 'aos';

import '../css/App.scss';
import '../css/fonts.css';
import '../css/colors.css';
import 'aos/dist/aos.css';

import Home from './views/home';

import Header from './components/header';
import Footer from './components/footer';

function App() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <Header/>
            
            <Home/>

            <Footer/>
        </>
    );
}

export default App;
