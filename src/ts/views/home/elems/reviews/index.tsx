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

    const Review = (props: ReviewProps) => {
        const { review, name, job_title, picture } = props;

        const handlePrev = () => {
            setActiveReview(activeReview-1);
        }

        const handleNext = () => {
            setActiveReview(activeReview+1);
        }

        return (
            <div className="review__wrapper">
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
                    onClick={handlePrev}
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
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section id="reviews" className="wrapper">
            <div className="content">
                <h2 className="section__heading text__center">
                    Our coffee perfection feedback
                </h2>

                <p className="paragraph text__center m-t-16">
                    Read what our customers have to say about us
                </p>

                <div className="review__grid">
                    <Review
                        review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset....."
                        name='Jonny Thomas'
                        job_title='Project Manager'
                        picture='customer_1'
                    />

                    <Review
                        review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset....."
                        name='Mike Oxlong'
                        job_title='Teacher'
                        picture='customer_1'
                    />
                </div>
            </div>
        </section>
    );
}

export default Reviews;