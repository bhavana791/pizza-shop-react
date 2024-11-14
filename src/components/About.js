import React, { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";

const About = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const pizzaRef = useRef(null);

  useEffect(() => {
    // Slide in the title and text on mount
    TweenMax.fromTo(
      titleRef.current,
      1,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, ease: Power3.easeOut }
    );
    TweenMax.fromTo(
      textRef.current,
      1.5,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, ease: Power3.easeOut, delay: 0.3 }
    );

    // Rotate the pizza slice for a fun effect
    TweenMax.to(pizzaRef.current, 2, {
      rotation: 360,
      repeat: -1,
      ease: Power3.easeInOut,
    });
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.pizzaIcon} ref={pizzaRef}>
        🍕
      </div>
      <h2 ref={titleRef} style={styles.title}>About Us</h2>
      <p ref={textRef} style={styles.text}>
        Welcome to our pizzeria! We started our journey with a passion for crafting authentic,
        mouth-watering pizzas with the freshest ingredients. Every pizza is a piece of art, 
        hand-stretched and baked to perfection. From classic Margheritas to our unique 
        chef specials, we bring flavor and love to each bite. Join us for a slice of happiness!
      </p>
    </div>
  );
};

// CSS Styles
const styles = {
  container: {
    padding: "50px",
    textAlign: "center",
    backgroundColor: "#f9f2e7",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    maxWidth: "700px",
    margin: "0 auto",
    position: "relative",
  },
  pizzaIcon: {
    fontSize: "60px",
    position: "absolute",
    top: "-30px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#d35400",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.2rem",
    color: "#7f8c8d",
    lineHeight: "1.6",
  },
};

export default About;
