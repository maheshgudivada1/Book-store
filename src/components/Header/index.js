import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './index.css';
import Cart from '../Cart'; // Import Cart component

const Header = ({ cartItems = [], onIncreaseQuantity, onDecreaseQuantity }) => { // Default to an empty array if cartItems is undefined
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check for mobile view
  const [showCart, setShowCart] = useState(false); // To toggle cart visibility
  const [searchInput, setSearchInput] = useState('');

  // Handle window resizing for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to toggle the visibility of the cart
  const handleCartClick = () => {
    setShowCart(!showCart); // Toggle the state for showing the cart
  };

  // Function to handle the search input change
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    // Now you can define your own search logic here (e.g., filtering books or sending a request)
    console.log("Search query: ", e.target.value);
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img 
              src="https://images-platform.99static.com//X1qlArSqZKzOCllam27j7U6AaHA=/67x1137:930x2000/fit-in/500x500/99designs-contests-attachments/150/150226/attachment_150226770" 
              alt="Website Logo" 
            />
          </Link>
        </div>
        
        {/* Search Bar */}
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search for books..." 
            className="search-input"
            value={searchInput}
            onChange={handleSearchChange} // Update on input change
          />
        </div>

        {/* Cart Icon with Counter */}
        <div className="cart-icon-container" onClick={handleCartClick}>
          <FaShoppingCart className="cart-icon" />
          <span className="cart-count">{cartItems.length}</span>
        </div>

        {/* Cart Dropdown */}
        {showCart && <Cart cartItems={cartItems} onIncreaseQuantity={onIncreaseQuantity} onDecreaseQuantity={onDecreaseQuantity} />}
      </div>
    </header>
  );
};

export default Header;
