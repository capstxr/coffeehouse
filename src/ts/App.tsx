import React, { useEffect } from 'react';
import AOS from 'aos';

import '../css/App.scss';
import '../css/fonts.css';
import '../css/colors.css';
import 'aos/dist/aos.css';

import Home from './views/home';

function App() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Home/>
    );
}

export default App;
