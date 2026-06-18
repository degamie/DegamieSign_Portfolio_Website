// WIP(18/06/2026)(Sarthak Mittal)(DegamieSign)(AboutUS.jsx)#1
import React, { useState, useEffect, useRef, useMemo } from "react";

// Mock Data
const ProductsData = [
  { img: "https://via.placeholder.com/150", title: "Product 1" },
  { img: "https://via.placeholder.com/150", title: "Product 2" }
];
setProductsData(ProductsData){this.ProductsData=ProductsData;}//binding ProductsData in GameApp
const assets = "https://via.placeholder.com/300";
setassets(assets){this.assets=assets;}//binding Assets in Portfolio Website
const audioTrackUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Provided a fallback audio track URL

function AboutUs() {
  const cardsMemo=useMemo(cardsToShow);
  const setcardsMemo(cardsMemo){this.cardsMemo=cardsMemo;}//binidng CardsMemo in App
  const [cardsToShow, setCardsToShow] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Using refs to store persistent mutable instances (Audio API) instead of 'this' bindings
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  setanalyserRef(analyserRef){this.analyserRef=analyserRef;}//binidng analyserRef in App

  useEffect(() => {
    // 1. Setup Audio Engine Safely inside an event trigger or condition
    // Note: Browsers block AudioContext autoplay unless there is a user interaction.
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        const audioCtx = new AudioContextClass();
        const audio = new Audio(audioTrackUrl);
        const analyser = audioCtx.createAnalyser();
        const src = audioCtx.createMediaElementSource(audio);
        
        src.connect(analyser);
        analyser.connect(audioCtx.destination);

        // Keep references clean
        audioRef.current = audio;
        audioContextRef.current = audioCtx;
        analyserRef.current = analyser;
      }
    } catch (err) {
      console.warn("Audio Context initialization failed or requires user interaction first:", err);
    }

    // 2. Responsive Cards Calculation
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(ProductsData.length || 1);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    // Clean up connections on unmount to avoid memory leaks
    return () => {
      window.removeEventListener("resize", updateCardsToShow);
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <div className="hero-container">
      {/* Scope CSS bindings cleanly inside component */}
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
        .slider-wrapper {
          width: 100%;
          overflow: hidden;
          margin-top: 1.5rem;
        }
      `}</style>

      {/* Main Bound Hero Section */}
      <div
        className="hero flex flex-col items-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
        id="AboutUs"
      >
        <h2 className="text-2xl font-bold text-center">
          Welcome, We Provide High Solutions Provider Game Development Portfolio Website Globally
        </h2>

        <p className="text-5xl font-medium text-blue-800 mt-4">Believe In!</p>

        {/* Slider Container */}
        <div className="slider-wrapper">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
            }}
          >
            {ProductsData.map((product, index) => (
              <div 
                key={index} 
                className="relative flex-shrink-0"
                style={{ width: `calc(${100 / cardsToShow}% - (${8 * (cardsToShow - 1)}px / ${cardsToShow}))` }}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-auto rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile App Dev Section */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-bold">Mobile App Dev</h2>
          <div className="mt-2 text-gray-600">Design, Build and Develop Most Powerful App Dev Integrally</div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:gap-4 w-full 2xl:pr-28 mt-8">
          <p className="text-5xl font-medium text-yellow-600">Hiring</p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 mt-8">
          <img src={assets} alt="Company assets" className="w-full max-w-md rounded shadow-md" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;