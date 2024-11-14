import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './LandingPage.css';

const LandingPage = () => {
  const pizzaRef = useRef(null);
  
  const ctaRef = useRef(null);

  useEffect(() => {
    // Initial entrance animations
    gsap.from(pizzaRef.current, { scale: 0.8, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.8)" });
    

    // CTA button pulse animation
    gsap.to(ctaRef.current, { scale: 1.05, repeat: -1, yoyo: true, duration: 0.8, ease: "power1.inOut" });

    
    
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-section">
      <div className="floating-icons">
        <span className="icon">🍕</span>
        <span className="icon">🍅</span>
        <span className="icon">🧄</span>
        <span className="icon">🧀</span>
        <span className="icon">🌶️</span>
        <span className="icon">🥓</span>
      </div>
        <div className="pizza" ref={pizzaRef}>
          <img src="pizza_cutout.png" alt="Pizza" className="pizza-image" />
        </div>
       
        <div className="text-content">
          <h1>Discover the <span className="highlight">Best Pizza</span> in Town</h1>
          <p>Fresh ingredients, mouth-watering taste. Just a click away!</p>
          <button ref={ctaRef}  className="order-btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
