import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Contact.css'; // CSS styles for the component

const Contact = () => {
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Fade in animation for the form fields
    gsap.fromTo(
      formRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1.2, ease: 'power3.out' }
    );

    // Button hover animation
    gsap.fromTo(
      buttonRef.current,
      { scale: 1 },
      { scale: 1.05, duration: 0.4, yoyo: true, repeat: -1, ease: 'sine.inOut' }
    );
  }, []);

  const handleButtonHover = () => {
    gsap.to(buttonRef.current, {
      backgroundColor: '#ff6347',
      duration: 0.3,
      ease: 'power2.inOut',
    });
  };

  const handleButtonUnhover = () => {
    gsap.to(buttonRef.current, {
      backgroundColor: '#28a745',
      duration: 0.3,
      ease: 'power2.inOut',
    });
  };

  return (
    <div className="contact-us-section">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Please fill out the form below.</p>
      <form ref={formRef} className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />

        <button
          type="submit"
          className="submit-btn"
          ref={buttonRef}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonUnhover}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
