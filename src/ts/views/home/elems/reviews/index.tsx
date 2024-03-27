import { useState } from 'react';
import './reviews.scss';

const Reviews = () => {
    const [ activeReview, setActiveReview ] = useState<number>(0);

    interface ReviewProps {
        review: string;
        name: string;
        job_title: string;
        picture: string;
    }

    const reviews = [
        {
            name: 'Jonny Thomas',
            job_title: 'Project Manager',
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
            picture: 'customer_1'
        },
        {
            name: 'Mike Oxlong',
            job_title: 'Teacher',
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
            picture: 'customer_1'
        }
    ];

    const Review = (props: ReviewProps) => {
        const { review, name, job_title, picture } = props;

        const handlePrev = () => {
            if (activeReview == 0) {
                setActiveReview(reviews.length-1);
                return;
            }
            setActiveReview(activeReview-1);
        }

        const handleNext = () => {
            if (activeReview == reviews.length-1) {
                setActiveReview(0);
                return;
            }
            setActiveReview(activeReview+1);
        }

        return (
            <div
                className="review__wrapper"
                data-aos='fade-up'
                data-aos-duration='500'
                data-aos-delay='100'
            >
                <button
                    className="review__btn left"
                    onClick={handlePrev}
                >
                    <img
                        src="/images/icons/arrow.png"
                        alt="Back arrow"
                        className='review__btn__arrow'
                    />
                </button>

                <button
                    className="review__btn right"
                    onClick={handleNext}
                >
                    <img
                        src="/images/icons/arrow.png"
                        alt="Back arrow"
                        className='review__btn__arrow'
                    />
                </button>

                <div className="review__content">
                    <div className="review__top">
                        <p className="review__quote">
                            “
                        </p>
                    </div>

                    <div className="review__bottom">
                        <p className="review__text">
                            {review}
                        </p>

                        <span className="review__name">
                            {name}
                        </span>

                        <span className="job__title">
                            {job_title}
                        </span>
                        
                        <img
                            src={`/images/customers/${picture}.png`}
                            alt="Customer"
                            className="customer__image"
                            draggable={false}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section id="reviews" className="wrapper">
            <img
                src="/images/splashes/coffee_blast.png"
                alt="Coffee splash"
                className="splash splash__right"
                draggable={false}
            />

            <img
                src="/images/splashes/coffee_blast.png"
                alt="Coffee splash"
                className="splash splash__left splash__up"
                id='review__bottom'
                draggable={false}
            />

            <div className="content">
                <h2
                    className="section__heading text__center"
                    data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-offset='50'
                >
                    Our coffee perfection feedback
                </h2>

                <p
                    className="paragraph text__center m-t-16"
                    data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-delay='100'
                >
                    Read what our customers have to say about us
                </p>

                <div className="review__grid">
                    <Review
                        review={reviews[activeReview].review}
                        name={reviews[activeReview].name}
                        picture={reviews[activeReview].picture}
                        job_title={reviews[activeReview].job_title}
                    />
                </div>
            </div>
        </section>
    );
}

export default Reviews;