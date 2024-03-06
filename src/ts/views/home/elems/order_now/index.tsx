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
            />
            
            <div className="content">
                <div className="order__left">
                    <h2 className="section__heading order__head">
                        Get a chance to have an Amazing morning
                    </h2>

                    <p className="paragraph">
                        We are giving you are one time opportunity to experience a better life with coffee.
                    </p>

                    <a
                        href="#"
                        className="btn-1"
                        rel='noreferrer noopener nofollow'
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
                    />
                </div>
            </div>
        </section>
    );
}

export default OrderNow;