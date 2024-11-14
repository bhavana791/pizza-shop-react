import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Testimonials.css';

const testimonials = [
    { name: "Alice", review: "Best pizza I've ever had!" },
    { name: "Bob", review: "Great taste and fast delivery." },
    { name: "Clara", review: "Love the variety and freshness!" }
];

const Testimonials = () => {
    const testimonialRef = useRef([]);

    useEffect(() => {
        gsap.from(testimonialRef.current, {
            opacity: 1,
            y: 30,
            stagger: 0.3,
            duration: 1,
            ease: 'power3.out',
        });
    }, []);

    return (
        <section className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonial-list">
                {testimonials.map((testimonial, index) => (
                    <div 
                        className="testimonial-item"
                        ref={(el) => (testimonialRef.current[index] = el)} 
                        key={index}
                    >
                        <p>"{testimonial.review}"</p>
                        <h4>- {testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
