import React, { useState, useEffect, useCallback } from 'react';
import { Star,  ChevronLeft, ChevronRight } from 'lucide-react';
import testimonialList from "./TestimonialList";

const Ratings = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const gotoNextReview = useCallback(() => {
        setCurrentReview((prev) => (prev + 1) % testimonialList.length);
    }, []);

    const gotoPrevReview = useCallback(() => {
        setCurrentReview((prev) => (prev - 1 + testimonialList.length) % testimonialList.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(gotoNextReview, 5000);
        return () => clearInterval(timer);
    }, [gotoNextReview]);

    const renderStars = (rating) => {
        return Array(5).fill(0).map((_, i) => (
            <Star key={i} 
                  className="star" 
                  fill={i < rating ? "gold" : "none"} 
                  color={i< rating ? "gold" : "gray"}
            />
        ));
    };

    return (
        <section className="testimonials">
            <h3 className="testimonials-title">Testimonials</h3>
            <h2 className="testimonials-description">Read what others say about the restaurant</h2>
                <div className="review-list">
                    <p className="reviewer">{testimonialList[currentReview].name}</p>
                    <img src={testimonialList[currentReview].portrait} alt="portrait"></img>
                    <div className="star-rating">
                        {renderStars(testimonialList[currentReview].rating)}
                    </div>
                    <p className="review-text">{testimonialList[currentReview].comment}</p>
                    <div className="navigation-buttons">
                        <button className="navigation-button" onClick={gotoPrevReview}>
                            <ChevronLeft size={20} />
                        </button>
                        <button className="navigation-button" onClick={gotoNextReview}>
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
        </section>
    )
}

export default Ratings;