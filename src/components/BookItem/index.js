import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book }) => {
  if (!book) return null; // Fallback UI if no book data

  const { title, author_name, publisher, first_publish_year, isbn, cover_i, key } = book || {};

  // Generate the cover image URL if available
  const coverUrl = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg` : null;

  // Use the 'key' to construct the URL for the BookDetails page

  return (
    <li className="book-item">
      {/* Ensure that the link path is correct */}
      <Link to="/book" className="book-link">
        <div className={`book-cover-container ${!coverUrl ? 'no-image' : ''}`}>
          {coverUrl ? (
            <img src={coverUrl} alt={title || 'No title available'} className="book-cover" />
          ) : (
            <span className="book-cover-placeholder">No Cover</span>
          )}
        </div>

        <div className="book-details">
          <h3 className="book-title">{title || 'No title available'}</h3>
          {author_name && author_name.length > 0 && (
            <p className="book-author">Author: {author_name.join(', ')}</p>
          )}
          {publisher && publisher.length > 0 && (
            <p className="book-publisher">Publisher: {publisher[0]}</p>
          )}
          {first_publish_year && (
            <p className="book-publish-year">Published: {first_publish_year}</p>
          )}
          {isbn && isbn.length > 0 && (
            <p className="book-isbn">ISBN: {isbn[0]}</p>
          )}
        </div>
      </Link>
    </li>
  );
};

export default BookItem;
