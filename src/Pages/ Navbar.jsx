import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
        <div>

      <img alt="logo" src="./src/assets/Gemini_Generated_Image_ad9kqpad9kqpad9k (1).png" className='nav-logo'/>
        <input placeholder="search"/>
        
      {/* Hamburger button */}
      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* Menu */}
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
        </div>

    </nav>
  );
}

export default Navbar;
