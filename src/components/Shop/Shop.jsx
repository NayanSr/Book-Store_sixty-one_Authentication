// import React from "react";
import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Book from "../Book/Book";
import Cart from "../Cart/Cart";
import {
  addToDb,
  deleteStoredShopingCart,
  getStoredShopingCart,
} from "../../../fackDb";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  const handelAddToCart = (bookFromOnClickParam) => {
    const newCart = [...cart, bookFromOnClickParam];
    addToDb(bookFromOnClickParam.id);
    setCart(newCart);
    console.log(bookFromOnClickParam);
  };

  /* 
 const handleAddToCart = (product) => {
        // cart.push(product); '
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id)
    }
*/

  const handleClearCart = () => {
    setCart([]);
    deleteStoredShopingCart();
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
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/orders">
            <button className="shop-review-orders">Review Orders</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
