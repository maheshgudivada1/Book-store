import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './index.css'; // Import the CSS file

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    // Simulate fetching book details (For now, using static fallback data)
    setIsLoading(false);

    const defaultBook = {
      title: "The Adventure of Knowledge",
      author: "John Doe",
      firstPublishYear: "2024",
      isbn: "123-456-789",
      publisher: "Fictional Press",
      publishYear: "2024",
    };

    setBook(defaultBook);
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!book) {
    return (
      <div className="book-details-page">
        <div className="default-book-content">
          <h1>Book Not Found</h1>
          <p>We're sorry, we couldn't find the details for this book. But here's why books are important:</p>
          <p>
            Books are windows to new worlds. They inspire, inform, and help us grow. Whether it's fiction that lets us escape reality or non-fiction that teaches us about the world, books play an essential role in shaping our knowledge and our imaginations.
          </p>
          <p>
            Even when one book isn't available, there are countless others to explore. Every book we read adds to our understanding of ourselves and the world around us.
          </p>
          <p>
            So, keep reading and exploring new knowledge. The right book is out there waiting for you!
          </p>
          <button className="learn-more-btn" onClick={() => navigate('/')}>Go Back to Book Finder</button>
        </div>
      </div>
    );
  }

  return (
    <div className="book-details-page">
      <div className="book-details-container">
        <h1>{book.title}</h1>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>First Published:</strong> {book.firstPublishYear}</p>
        <p><strong>ISBN:</strong> {book.isbn}</p>
        <p><strong>Publisher:</strong> {book.publisher}</p>
        <p><strong>Publish Year:</strong> {book.publishYear}</p>
        <button className="learn-more-btn" onClick={() => navigate('/')}>Go Back to Book Finder</button>
      </div>
    </div>
  );
};

export default BookDetails;
