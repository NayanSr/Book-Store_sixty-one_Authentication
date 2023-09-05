// import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Orders.css";
import ReviewItem from "../ReviewItem/ReviewItem";
import { useState } from "react";
import { removeOneFromDb } from "../../../fackDb";

const Orders = () => {
  const dataFromCartBookLoader = useLoaderData();
  const [savedBooks, books] = dataFromCartBookLoader; // destructure only for testing
  const [cart, setCart] = useState(savedBooks);

  const handelRemovefromCart = (id) => {
    const remaining = cart.filter((cartItem) => cartItem.id !== id);
    setCart(remaining);
    removeOneFromDb(id);
  };
  // console.log(savedBooks);
  // console.log(books);

  return (
    <div className="shop-container">
      <div className="review-item-paremt">
        {cart.map((sb) => (
          <ReviewItem
            key={sb.id}
            sb={sb}
            handelRemovefromCart={handelRemovefromCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
