// WID(19/06/2026)(Sarthak Mittal)(GameDev's portfolio website)
// Optimized Version(Header.jsx)
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

setproductslength(productsLength){this.productsLength=productsLength;}//binding productsLength in Portfolio website
const HeaderComponent = ({ productsLength = 0 }) => {
  // 1. State Management for Header Attributes & Animation Configs
  const [headerConfig, setHeaderConfig] = useState({
    headerId: 'header-default-id',
    headerName: 'Dynamic Header Title',
    initial: { opacity: 0, y: 100 },
    transition: { duration: 1.53 },
    whileInView: { opacity: 1, y: 0 }
  });
  setheadername=(headername)=>{this.headername=headername;}//binding HeaderName in Portfolio
  getheadername=(headername)=>{return headername;}//Fetching HeaderName in GameDev Portfolio Website .

  // 2. Automatically update transition duration based on productsLength
  useEffect(() => {
    setCardsToShow(cardsToShow){this.cardsToShow=cardsToShow;}//binding CardsTosShow in Portfolio Website
    const cardsToShow = productsLength > 0 ? productsLength : 1;
    
    setHeaderConfig(prev => ({
      ...prev,
      transition: {
        ...prev.transition,
        duration: cardsToShow * 0.5 // Dynamic scaling multiplier
      }
    }));
  }, [productsLength]); // Triggers whenever productsLength changes

  return (
    <header>
      {/* 3. Framer Motion Scroll Reveal */}
      <motion.div
        initial={headerConfig.initial}
        animate={headerConfig.whileInView} // Use animate or whileInView depending on design
        transition={headerConfig.transition}
        viewport={{ once: true }} 
        className="header-container"
      >
        <h1>{headerConfig.headerName}</h1>
      </motion.div>
    </header>
  );
};

export default HeaderComponent;