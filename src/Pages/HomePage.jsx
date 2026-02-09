import React from 'react'
import "./HomePage.css"
import Navbar from './ Navbar';
import { useEffect, useState } from "react"

function HomePage() {
  const BOX_WIDTH = 216;
  const [index, setIndex] = useState(0);

  const items = Array.from({ length: 8 }, (_, i) => `Box ${i + 1}`);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => setIndex((prev) => prev + 1);
  const handlePrev = () => setIndex((prev) => Math.max(prev - 1, 0));
  return (
  <>
    <navbar className="nav">
      {/* <img  alt="logo" src="./src/assets/Gemini_Generated_Image_ad9kqpad9kqpad9k (1).png" className='logo'/> */}
     <Navbar/>
    </navbar>

  
    <div className="slider-container">
      {/* Left Arrow */}
      <button className="arrow left" onClick={handlePrev}>
        ⬅️
      </button>

      <div className="slider">
        <div
          className="track"
          style={{ transform: `translateX(-${index * BOX_WIDTH}px)` }}
        >
          {items.map((item, i) => (
            <div className="box" key={i}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button className="arrow right" onClick={handleNext}>
        ➡️ 
      </button>
    </div>
  </>

  )
}

export default HomePage;