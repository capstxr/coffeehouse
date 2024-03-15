import '../css/App.scss';
import '../css/fonts.css';
import '../css/colors.css';

import Home from './views/home';

import Header from './components/header';
import Footer from './components/footer';

function App() {
    return (
        <>
            <Header/>
            
            <Home/>

            <Footer/>
        </>
    );
}

export default App;
