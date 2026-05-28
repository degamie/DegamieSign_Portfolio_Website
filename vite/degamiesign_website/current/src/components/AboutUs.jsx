// WIP(28/05/2026)(Sarthak Mittal)#1.1.1.1.1c.1cC.1cC.1.1.1.1.1.1/1C.1.1
import React, { useState, useEffect } from "react";
import herouiNative from "https://esm.sh/heroui-native@1.0.3";

// Mocking ProductsData and assets - Ensure these are imported correctly from your source paths
const ProductsData = [
  { img: "https://via.placeholder.com/150", title: "Product 1" },
  { img: "https://via.placeholder.com/150", title: "Product 2" }
];
const assets = "https://via.placeholder.com/300";

function AboutUs() {
  const [cardsToShow, setCardsToShow] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
          // 1. Setup Audio Engine
          const audio = new Audio(audioTrackUrl);
          const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
          const analyzer=audioctx.createAnalyzer();
          const src=audioCtx.createElementSource(audio);
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(ProductsData.length);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  return (
    <div className="hero-container">
      {/* CSS Binding */}
      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>

      {/* Main Bound Hero Section */}
      <div
        className="hero flex flex-col items-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
        id="AboutUs"
      >
        <h2>
          Welcome, We Provide High Solutions Provider Game Developement
          Portfolio WebsiteGlobally
        </h2>

        <p className="text-5xl font-medium text-blue-800 mt-4">Believe In!</p>

        {/* Slider Container */}
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out mt-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
          }}
        >
          {ProductsData.map((product, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Mobile App Dev Section */}
        <div className="mt-12 text-center">
          <h2>Mobile App Dev</h2>
          <div>Design, Build and Develop Most Powerful App Dev Integrally</div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:gap-4 w-full 2xl:pr-28 mt-8">
          <p className="text-5xl font-medium text-yellow-600">Hiring</p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 mt-8">
          <img src={assets} alt="Company assets" className="w-full max-w-md" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
