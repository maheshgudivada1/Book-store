import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookFinder from './components/BookFinder';
import BookDetails from './components/BookDetails'; // Import BookDetails component
import TopHeader from './components/TopHeader';
import Footer1 from './components/Footer1';
import Footer2 from './components/Footer2';
import ContactUs from './components/ContactUs';
import Faqs from './components/Faqs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Header from './components/Header'; // Cart Header
import Cart from './components/Cart'; // Cart Component

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a new book to the cart
  const addNewBook = (book) => {
    const existingItem = cartItems.find(item => item.id === book.id);
    if (existingItem) {
      // If the book already exists in the cart, increase the quantity
      setCartItems(cartItems.map(item =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // If the book doesn't exist in the cart, add it with quantity 1
      const newBook = { ...book, quantity: 1 };
      setCartItems(prevItems => [...prevItems, newBook]);  // Add new book to cart
    }
  };

  // Function to increase quantity of a book
  const handleIncreaseQuantity = (book) => {
    setCartItems(cartItems.map(item =>
      item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Function to decrease quantity of a book
  const handleDecreaseQuantity = (book) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === book.id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0); // Ensure no item has 0 quantity
    setCartItems(updatedCartItems);
  };

  return (
    <Router>
      <TopHeader />
      <Header 
        cartItems={cartItems}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
      />
      <Routes>
        <Route path="/" element={<BookFinder />} />
        <Route 
          path="/books/:id" 
          element={<BookDetails onAddToCart={addNewBook} />} 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Cart
        cartItems={cartItems}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
      />
      <Footer1 />
      <Footer2 />
    </Router>
  );
};


export default App;
