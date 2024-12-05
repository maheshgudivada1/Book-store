import React, { useState } from 'react';
import './index.css';

const Cart = ({ cartItems, onIncreaseQuantity, onDecreaseQuantity, onAddNewBook }) => {
  // Function to handle adding a new book to the cart
  const handleAddNewBook = (book) => {
    const existingBook = cartItems.find((item) => item.id === book.id);
    if (existingBook) {
      // Book already in cart, just increase the quantity
      onIncreaseQuantity(book);
    } else {
      // Book not in cart, add to the cart
      onAddNewBook(book);
    }
  };

  return (
    <div className="cart-dropdown">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-items-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <h4>{item.title}</h4>
              <p><strong>Author:</strong> {item.authors ? item.authors[0].name : 'Unknown'}</p>
              <p><strong>Published By:</strong> {item.publishers ? item.publishers.join(', ') : 'N/A'}</p>
              <div className="cart-item-controls">
                <button onClick={() => onDecreaseQuantity(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddNewBook(item)}>+</button> {/* Add book to cart or increase quantity */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
