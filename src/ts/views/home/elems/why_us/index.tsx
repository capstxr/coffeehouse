import './why_us.scss';

const WhyChooseUs = () => {
    interface CardProps {
        icon: string;
        head: string;
        summary: string;
    }

    const WhyCard = (props: CardProps) => {
        const { icon, head, summary } = props;

        return (
            <div className="why__card__wrapper item">
                <div className="why__card__top">
                    <img
                        src={`/images/icons/${icon}.png`}
                        alt={icon}
                        className="why__card__icon"
                        loading='lazy'
                        draggable={false}
                    />
                </div>

                <div className="why__card__bottom">
                    <h5 className="why__card__head">
                        {head}
                    </h5>

                    <p className="why__card__summary">
                        {summary}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <section id="why__us" className="wrapper">
            <div className="content">
                <h2 className="section__heading text__center">
                    Why are we different?
                </h2>

                <p className="paragraph text__center m-t-16">
                    We don't just make your coffee, we make your day!
                </p>

                <div className="row__grid__4 m-t-32">
                    <WhyCard
                        icon='beans'
                        head='Supreme Beans'
                        summary='Beans that provide great taste'
                    />

                    <WhyCard
                        icon='badge'
                        head='High Quality'
                        summary='We provide the highest quality'
                    />

                    <WhyCard
                        icon='coffee-cup'
                        head='Supreme Beans'
                        summary='Beans that provide great taste'
                    />

                    <WhyCard
                        icon='best-price'
                        head='High Quality'
                        summary='We provide the highest quality'
                    />
                </div>

                <div className="join__us">
                    <p className="paragraph">
                        Great ideas start with great coffee, Lets help you achieve that
                    </p>

                    <h2 className="section__heading">
                        Get started today
                    </h2>

                    <a
                        href="#"
                        className="btn-1"
                        rel='noreferrer noopener nofollow'
                    >
                        Join Us
                    </a>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;