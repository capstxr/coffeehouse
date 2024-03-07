import './menu.scss';

const Menu = () => {
    interface CoffeeProps {
        name: string;
        coffee: number;
        milk: number;
        price: string;
        id: number;
    }

    const Coffee = (props: CoffeeProps) => {
        const { name, coffee, milk, price, id } = props;

        const DELAY = 150 * id;

        return (
            <div
                className="item coffee__wrapper"
                data-aos="fade-up"
                data-aos-delay={DELAY}
                data-aos-duration='300'
                data-aos-offset='250'
            >
                <img
                    src={`/images/coffee/${name}.png`}
                    alt={name}
                    className="coffee__image"
                    loading='lazy'
                    draggable={false}
                />

                <div className="coffee__bottom">
                    <h5 className="coffee__name">
                        {name}
                    </h5>

                    <span className="coffee__mixture">
                        Coffee {coffee}% | Milk {milk}%
                    </span>

                    <span className="coffee__price">
                        ${price}
                    </span>
                </div>
            </div>
        );
    }

    return (
        <section id="menu" className="wrapper">
            <div className="content">
                <h2
                    className="section__heading text__center"
                    data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-offset='50'
                >
                    Enjoy a new blend of coffee style
                </h2>

                <p
                    className="text__center paragraph m-t-16"
                    data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-delay='100'
                >
                    Explore all flavours of coffee with us. There is always a new cup worth experiencing
                </p>

                <div className="row__grid__4 m-t-32">
                    <Coffee
                        name='capuccino'
                        coffee={50}
                        milk={50}
                        price='8.50'
                        id={3}
                    />

                    <Coffee
                        name='chai latte'
                        coffee={50}
                        milk={50}
                        price='8.50'
                        id={2}
                    />

                    <Coffee
                        name='macchiatto'
                        coffee={50}
                        milk={50}
                        price='8.50'
                        id={1}
                    />

                    <Coffee
                        name='expresso'
                        coffee={50}
                        milk={50}
                        price='8.50'
                        id={0}
                    />
                </div>
            </div>
        </section>
    );
}

export default Menu;