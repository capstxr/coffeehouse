import { useState } from 'react';

import './header.scss';

const Header = () => {
    const [ hasBg, setHasBg ] = useState<string>('');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 75) {
            setHasBg('background');
        } else {
            setHasBg('');
        }
    });

    return (
        <header
            id="header"
            className={`wrapper ${hasBg}`}
        >
            <nav className="content" id='nav'>
                <div className="nav__list">
                    <a
                        href="#"
                        className='nav__logo cursive nav__link'
                        rel='noreferrer noopener nofollow'
                    >
                        Bean Scene
                    </a>
                </div>

                <div className="nav__list">
                    <a
                        href="#"
                        className='nav__link'
                        rel='noreferrer noopener nofollow'
                    >
                        Home
                    </a>

                    <a
                        href="#menu"
                        className='nav__link'
                        rel='noreferrer noopener nofollow'
                    >
                        Menu
                    </a>

                    <a
                        href="#why__us"
                        className='nav__link'
                        rel='noreferrer noopener nofollow'
                    >
                        About Us
                    </a>

                    <a
                        href="#newsletter"
                        className='nav__link'
                        rel='noreferrer noopener nofollow'
                    >
                        Contact Us
                    </a>
                </div>

                <div className="nav__list">
                    <a
                        href="#"
                        className='nav__link'
                        rel='noreferrer noopener nofollow'
                    >
                        Sign In
                    </a>

                    <a
                        href="#"
                        className='nav__link sign__up__btn'
                        rel='noreferrer noopener nofollow'
                    >
                        Sign Up
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;