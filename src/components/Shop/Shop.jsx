// import React from "react";
import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Book from "../Book/Book";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handelAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {books.map((book) => (
          <Book
            key={book.title}
            book={book}
            handelAddToCart={handelAddToCart}
          ></Book>
        ))}
      </div>
      <div className="cart-container">
        <h3>Order Summary</h3>
        <p>selected Item : {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
