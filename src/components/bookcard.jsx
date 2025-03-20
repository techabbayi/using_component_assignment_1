import React from 'react';
import '../App.css';

const BookCard = ({ book }) => {
  return (
    <div className="card">
      <img src={book.image} alt={book.name} className="image" />
      <h3>{book.name}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
    </div>
  );
};

export default BookCard;
