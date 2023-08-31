// import React from "react";
import { useState } from "react";
import "./Books.css";
import { useEffect } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="products-container">
        {books.map((book) => (
          <Book key={book.title} book={book}></Book>
        ))}
      </div>
      <div className="cart-container">
        <h3>Cart</h3>
      </div>
    </div>
  );
};

export default Books;
