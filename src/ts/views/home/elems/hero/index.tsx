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
                <p className="hero__label">
                    We've got your morning covered with
                </p>

                <h3 className="hero__head cursive">
                    Coffee
                </h3>

                <p className="hero__text">
                    It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.
                </p>

                <a
                    href="#"
                    rel='noreferrer noopener nofollow'
                    className='btn-1'
                >
                    Order Now
                </a>
            </div>
        </section>
    );
}

export default Hero;