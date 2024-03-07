import './order.scss';

const OrderNow = () => {
    return (
        <section id="order__now" className="wrapper">
            <img
                src="/images/backgrounds/pouring_coffee.png"
                alt="Background"
                className="order__background__image"
                loading='lazy'
                draggable={false}
            />

            <div className="background__overlay" />

            <img
                src="/images/beans/beans.png"
                alt="Coffee beans"
                className="order__beans"
                draggable={false}
                loading='lazy'
                data-aos='fade-left'
                data-aos-duration='450'
                data-aos-easing='ease-in-out'
                data-aos-offset='250'
            />
            
            <div className="content">
                <div className="order__left">
                    <h2
                        className="section__heading order__head"
                        data-aos='fade-right'
                        data-aos-duration='500'
                        data-aos-offset='50'
                    >
                        Get a chance to have an Amazing morning
                    </h2>

                    <p
                        className="paragraph"
                        data-aos='fade-right'
                        data-aos-duration='500'
                        data-aos-delay='100'
                    >
                        We are giving you are one time opportunity to experience a better life with coffee.
                    </p>

                    <a
                        href="#"
                        className="btn-1"
                        rel='noreferrer noopener nofollow'
                        data-aos='fade-right'
                        data-aos-duration='500'
                        data-aos-delay='200'
                    >
                        Order Now
                    </a>
                </div>

                <div className="order__right">
                    <img
                        src="/images/coffee/go_to_cup.png"
                        alt="Coffee mug"
                        className="order-cup"
                        loading='lazy'
                        draggable={false}
                        data-aos='zoom-in'
                        data-aos-delay='50'
                        data-aos-easing='ease'
                    />
                </div>
            </div>
        </section>
    );
}

export default OrderNow;