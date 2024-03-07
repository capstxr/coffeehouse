import React from 'react';
import AOS from 'aos';

import '../css/App.scss';
import '../css/fonts.css';
import '../css/colors.css';

import Home from './views/home';

function App() {
    AOS.init();

    return (
        <Home/>
    );
}

export default App;
