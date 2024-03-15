import './menu.scss';

const Menu = () => {
    interface CoffeeProps {
        name: string;
        coffee: number;
        milk: number;
        price: string;
    }

    const Coffee = (props: CoffeeProps) => {
        const { name, coffee, milk, price } = props;

        return (
            <div
                className="item coffee__wrapper"
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
                >
                    Enjoy a new blend of coffee style
                </h2>

                <p
                    className="text__center paragraph m-t-16"
                >
                    Explore all flavours of coffee with us. There is always a new cup worth experiencing
                </p>

                <div className="row__grid__4 m-t-32">
                    <Coffee
                        name='capuccino'
                        coffee={50}
                        milk={50}
                        price='8.50'
                    />

                    <Coffee
                        name='chai latte'
                        coffee={50}
                        milk={50}
                        price='8.50'
                    />

                    <Coffee
                        name='macchiatto'
                        coffee={50}
                        milk={50}
                        price='8.50'
                    />

                    <Coffee
                        name='expresso'
                        coffee={50}
                        milk={50}
                        price='8.50'
                    />
                </div>
            </div>
        </section>
    );
}

export default Menu;