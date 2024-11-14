import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

import MargheritaImage from "../Images/margreta.jpg";
import PepperoniImage from "../Images/pepperoni (2).jpg";
import BBQChickenImage from "../Images/pizza3.jpg";
import VeggieImage from "../Images/pizza4.jpg";
import MeatLoversImage from "../Images/pizza5.jpg";

gsap.registerPlugin(Flip);

const Menu = () => {
  const menuItemsRef = useRef([]);
  const [flippedIndex, setFlippedIndex] = useState(null);

  useEffect(() => {
    gsap.from(menuItemsRef.current, {
      opacity: 1,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const menuItems = [
    {
      name: "Classic Margherita",
      description: "Tomato, mozzarella, basil",
      price: "$12",
      image: MargheritaImage,
      details: "A traditional Italian favorite with fresh basil.",
    },
    {
      name: "Pepperoni Feast",
      description: "Pepperoni, mozzarella, tomato sauce",
      price: "$15",
      image: PepperoniImage,
      details: "Loaded with double pepperoni for meat lovers.",
    },
    {
      name: "BBQ Chicken",
      description: "BBQ sauce, chicken, red onions, cilantro",
      price: "$16",
      image: BBQChickenImage,
      details: "Tangy BBQ sauce paired with grilled chicken.",
    },
    {
      name: "Veggie Delight",
      description: "Bell peppers, olives, onions, mushrooms",
      price: "$14",
      image: VeggieImage,
      details: "A colorful mix of fresh veggies for a light taste.",
    },
    {
      name: "Meat Lovers",
      description: "Pepperoni, sausage, ham, bacon",
      price: "$18",
      image: MeatLoversImage,
      details: "Packed with a variety of meats for hearty appetites.",
    },
  ];

  const flipCard = (index) => {
    const state = Flip.getState(menuItemsRef.current);
    setFlippedIndex(flippedIndex === index ? null : index);
    Flip.from(state, { duration: 0.8, ease: "elastic.out(1, 0.5)" });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Menu</h2>
      <div style={styles.menuList}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (menuItemsRef.current[index] = el)}
            style={styles.menuItem}
            onMouseEnter={() => gsap.to(menuItemsRef.current[index], { scale: 1.05, rotate: 1, duration: 0.3 })}
            onMouseLeave={() => gsap.to(menuItemsRef.current[index], { scale: 1, rotate: 0, duration: 0.3 })}
            onClick={() => flipCard(index)}
          >
            <div
              style={{
                ...styles.card,
                transform: flippedIndex === index ? "rotateY(180deg)" : "rotateY(0)",
              }}
            >
              <div style={styles.frontContent}>
                <img src={item.image} alt={item.name} style={styles.image} />
                <h3 style={styles.itemName}>{item.name}</h3>
                <p style={styles.description}>{item.description}</p>
                <p style={styles.price}>{item.price}</p>
              </div>
              <div style={styles.backContent}>
                <h3 style={styles.itemName}>{item.name}</h3>
                <img src={item.image} alt={item.name} style={styles.image} />
                <p style={styles.details}>{item.details}</p>
                <p style={styles.price}>{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles

const styles = {
  container: {
    textAlign: "center",
    padding: "35px",
    backgroundColor: "#fdf1e6",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    maxWidth: "900px",
    margin: "0 auto",
    marginTop:"50px",
    
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#d35400",
    marginBottom: "20px",
    
  },
  menuList: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  menuItem: {
    width: "250px",
    height: "350px",
    perspective: "1000px", // Enable 3D effect
  },
  card: {
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d", // Make sure child elements are transformed in 3D space
    transition: "transform 0.8s",
    position: "relative",
    cursor: "pointer",
  },
  frontContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backfaceVisibility: "hidden",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  backContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backfaceVisibility: "hidden",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    transform: "rotateY(180deg)", // Flip the back content
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  image: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  itemName: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "10px 0",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
  },
  details: {
    fontSize: "1rem",
    color: "#555",
  },
  price: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#333",
  },
};

export default Menu;
