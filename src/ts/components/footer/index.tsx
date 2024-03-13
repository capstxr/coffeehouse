import './footer.scss';

import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer id="footer" className="wrapper">
            <img
                src="/images/beans/footer_beans.png"
                alt="Coffee Beans"
                className="footer__background__img"
            />

            <div className="footer__background__overlay" />

            <div className="footer__img__bg__overlay"/>

            <div className="content">
                <div className="footer__grid">
                    <div className="footer__item">
                        <h3
                            className="cursive footer__logo"
                            data-aos='fade-up'
                            data-aos-duration='250'
                        >
                            Bean Scene
                        </h3>

                        <p
                            className="f__intro__text"
                            data-aos='fade-up'
                            data-aos-duration='250'
                            data-aos-delay='50'
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        <div className="footer__social__grid">
                            <a
                                href="https://www.facebook.com/"
                                className="f__social__item"
                                rel='noreferrer noopener nofollow'
                                target='_blank'
                                data-aos='fade-right'
                                data-aos-duration='250'
                                data-aos-delay='100'
                                data-aos-offset='-150'
                            >
                                <FaFacebook className='f__s__icon'/>
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                className="f__social__item"
                                rel='noreferrer noopener nofollow'
                                target='_blank'
                                data-aos='fade-right'
                                data-aos-duration='250'
                                data-aos-delay='150'
                                data-aos-offset='0'
                            >
                                <RiInstagramFill className='f__s__icon'/>
                            </a>

                            <a
                                href="https://www.youtube.com/"
                                className="f__social__item"
                                rel='noreferrer noopener nofollow'
                                target='_blank'
                                data-aos='fade-right'
                                data-aos-duration='250'
                                data-aos-delay='200'
                                data-aos-offset='-150'
                            >
                                <FaYoutube className='f__s__icon'/>
                            </a>

                            <a
                                href="https://twitter.com/home"
                                className="f__social__item"
                                rel='noreferrer noopener nofollow'
                                target='_blank'
                                data-aos='fade-right'
                                data-aos-duration='250'
                                data-aos-delay='250'
                                data-aos-offset='-150'
                            >
                                <FaTwitter className='f__s__icon'/>
                            </a>
                        </div>
                    </div>

                    <div className="footer__item">
                        <h3
                            className="footer__head"
                            data-aos='fade-down'
                            data-aos-duration='250'
                            data-aos-delay='100'
                        >
                            Navigation
                        </h3>

                        <div className="footer__nav">
                            <a
                                href="#"
                                rel='noreferrer noopener nofollow'
                                className='footer__link'
                                data-aos='fade-down'
                                data-aos-duration='250'
                                data-aos-delay='150'
                            >
                                Home
                            </a>

                            <a
                                href="#"
                                rel='noreferrer noopener nofollow'
                                className='footer__link'
                                data-aos='fade-down'
                                data-aos-duration='250'
                                data-aos-delay='200'
                            >
                                Menu
                            </a>

                            <a
                                href="#"
                                rel='noreferrer noopener nofollow'
                                className='footer__link'
                                data-aos='fade-down'
                                data-aos-duration='250'
                                data-aos-delay='250'
                            >
                                Features
                            </a>

                            <a
                                href="#"
                                rel='noreferrer noopener nofollow'
                                className='footer__link'
                                data-aos='fade-down'
                                data-aos-duration='250'
                                data-aos-delay='300'
                                data-aos-offset='-50'
                            >
                                News & Blog
                            </a>
                        </div>
                    </div>

                    <div className="footer__item">
                        <h3
                            className="footer__head"
                            data-aos='fade-down'
                            data-aos-duration='250'
                            data-aos-delay='100'
                        >
                            Company
                        </h3>

                        <div className="footer__nav">
                            <a
                                href="#"
                                rel='noreferrer noopener nofollow'
                                className='footer__link'
                                data-aos='fade-down'
                                data-aos-duration='250'
                                data-aos-delay='150'
                            >
                                How we work
                            </a>

                            <a
                                href="#"
                                rel='noreferrer noopener nofollow'
                                className='footer__link'
                                data-aos='fade-down'
                                data-aos-duration='250'
                                data-aos-delay='150'
                            >
                                Terms of service
                            </a>

                            <a
                                href="#"
                                rel='noreferrer noopener nofollow'
                                className='footer__link'
                                data-aos='fade-down'
                                data-aos-duration='250'
                                data-aos-delay='200'
                            >
                                Pricing
                            </a>

                            <a
                                href="#"
                                rel='noreferrer noopener nofollow'
                                className='footer__link'
                                data-aos='fade-down'
                                data-aos-duration='250'
                                data-aos-delay='250'
                                data-aos-offset='-50'
                            >
                                FAQ
                            </a>
                        </div>
                    </div>

                    <div className="footer__item">
                        <h3
                            className="footer__head"
                            data-aos='fade-down'
                            data-aos-duration='250'
                            data-aos-delay='100'
                        >
                            Contact Us
                        </h3>

                        <div className="footer__nav">
                            <span
                                className='footer__link'
                                data-aos='fade-down'
                                data-aos-duration='250'
                                data-aos-delay='150'
                            >
                                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
                            </span>

                            <a
                                href="#"
                                rel='noreferrer noopener nofollow'
                                className='footer__link'
                                data-aos='fade-down'
                                data-aos-duration='250'
                                data-aos-delay='200'
                            >
                                +1 202-918-2132
                            </a>

                            <a
                                href="#"
                                rel='noreferrer noopener nofollow'
                                className='footer__link'
                                data-aos='fade-down'
                                data-aos-duration='250'
                                data-aos-delay='250'
                                data-aos-offset='-50'
                            >
                                beanscene@mail.com
                            </a>

                            <a
                                href="#"
                                rel='noreferrer noopener nofollow'
                                className='footer__link'
                                data-aos='fade-down'
                                data-aos-duration='250'
                                data-aos-delay='300'
                                data-aos-offset='-50'
                            >
                                www.beanscene.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;