import './hero.scss';

const Hero = () => {
    return (
        <section id="hero" className="wrapper">
            <img
                src="/images/backgrounds/hero_bg.png"
                alt="Background"
                className="hero__background"
                loading='eager'
                draggable={false}
            />

            <div className="content">
                <p
                    className="hero__label"
                    data-aos='fade-up'
                    data-aos-duration='400'
                >
                    We've got your morning covered with
                </p>

                <h3
                    className="hero__head cursive"
                    data-aos='fade-up'
                    data-aos-duration='400'
                    data-aos-delay='200'
                >
                    Coffee
                </h3>

                <p
                    className="hero__text"
                    data-aos='fade-up'
                    data-aos-duration='400'
                    data-aos-delay='400'
                >
                    It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.
                </p>

                <a
                    href="#"
                    rel='noreferrer noopener nofollow'
                    className='btn-1'
                    data-aos='fade-up'
                    data-aos-duration='400'
                    data-aos-delay='600'
                >
                    Order Now
                </a>
            </div>
        </section>
    );
}

export default Hero;