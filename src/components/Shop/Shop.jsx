// import React from "react";
import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Book from "../Book/Book";
import Cart from "../Cart/Cart";
import {
  addToDb,
  getStoredShopingCart,
  removeOneFromDb,
} from "../../../fackDb";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoredShopingCart();
    console.log(storedCart);
  }, []);

  const handelAddToCart = (book) => {
    const newCart = [...cart, book];
    setCart(newCart);
    addToDb(book.id);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
