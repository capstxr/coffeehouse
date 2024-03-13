import './newsletter.scss';

const Newsletter = () => {
    return (
        <section id="newsletter" className="wrapper">
            <img
                src="/images/backgrounds/pouring_coffee.png"
                alt="Background"
                className="newsletter__background"
                draggable={false}
            />

            <div className="newsletter__bg__overlay" />

            <img
                src="/images/splashes/coffee_splashing.png"
                alt="coffee mug"
                className="coffee__mug coffee__mug__left"
                draggable={false}
            />

            <img
                src="/images/splashes/coffee_splashing.png"
                alt="coffee mug"
                className="coffee__mug coffee__mug__right"
                draggable={false}
            />

            <div className="content">
                <h2
                    className="section__heading"
                    data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-offset='50'
                >
                    Subscribe to get the latest news
                </h2>

                <p
                    className="paragraph"
                    data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-delay='50'
                >
                    Don’t miss out on our latest news, updates, tips and special offers
                </p>

                <div
                    className="newsletter__input__container"
                    data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-delay='50'
                >
                    <div className="newsletter__left">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className='newsletter__input'
                            placeholder='Enter your email'
                        />
                    </div>

                    <button
                        className='newsletter__btn'
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;