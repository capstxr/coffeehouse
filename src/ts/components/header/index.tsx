import { useState, useEffect } from 'react';

import { PiListBold } from "react-icons/pi";

import './header.scss';

const Header = () => {
    const [ hasBg, setHasBg ] = useState<string>('');
    const [ isOpen, setIsOpen ] = useState<boolean>();

    window.addEventListener('scroll', function() {
        if (window.scrollY > 75) {
            setHasBg('background');
        } else {
            setHasBg('');
        }
    });

    const handleHamburgerClick = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        document.body.classList.toggle('is-open');
    }, [isOpen]);

    return (
        <header
            id="header"
            className={`wrapper ${hasBg} ${isOpen ? 'open': ''}`}
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

            <nav id="mobile__nav" className="content">
                <div className="nav__list">
                    <a
                        href="#"
                        className='nav__logo cursive nav__link'
                        rel='noreferrer noopener nofollow'
                    >
                        Bean Scene
                    </a>
                </div>

                <div className="mobile__nav__content">
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
                </div>

                <button
                    className="hamburger"
                    onClick={handleHamburgerClick}
                >
                    <PiListBold/>
                </button>
            </nav>
        </header>
    );
}

export default Header;