import './intro.scss';

const Intro = () => {
    return (
        <section id="intro" className="wrapper">
            <div className="content">
                <div className="intro__left">
                    <h2 className="section__heading intro__heading">
                        Discover the best coffee
                    </h2>

                    <p className="paragraph intro__text">
                        Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
                    </p>

                    <a
                        href="#"
                        rel='noreferrer noopener nofollow'
                        className='btn-1'
                    >
                        Learn More
                    </a>
                </div>

                <div className="intro__right">
                    <img
                        src="/images/beans/coffee_of_beans.png"
                        alt="Coffee Mug"
                        className="intro_coffee"
                        loading='lazy'
                        draggable={false}
                    />
                </div>
            </div>
        </section>
    );
}

export default Intro;