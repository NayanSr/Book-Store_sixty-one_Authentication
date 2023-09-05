// import React from "react";
import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Book from "../Book/Book";
import Cart from "../Cart/Cart";
import { addToDb, getStoredShopingCart } from "../../../fackDb";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  const handelAddToCart = (bookFromOnClickParam) => {
    const newCart = [...cart, bookFromOnClickParam];
    addToDb(bookFromOnClickParam.id);
    setCart(newCart);
    console.log(bookFromOnClickParam);
  };

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoredShopingCart();
    const savedCart = [];
    //?  getting id from storedCart in local storage
    for (const id in storedCart) {
      //? finding that books which id is saved in local storage cart
      const addedBook = books.find((book) => book.id === parseInt(id));
      //? setting local storage / db id's quantity in addedBooks quantity
      if (addedBook) {
        const quantity = storedCart[id];
        addedBook.quantity = quantity;
        savedCart.push(addedBook);
      }
      // console.log(addedBook);
    }
    setCart(savedCart);
  }, [books]);
  // }, [books, cart]);

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
