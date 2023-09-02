// import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // eslint-disable-next-line react/prop-types
  const cart = props.cart;

  let total = 0;
  let totalDelivery = 0;
  for (const book of cart) {
    total = total + parseInt(book.price);
    totalDelivery = totalDelivery + parseInt(book.delivery);
  }

  const tax = total * (7 / 100);
  const grandTotal = total + totalDelivery + tax;

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>selected Item : {cart.length}</p>
      <p>Total Price:{total.toFixed(2)}</p>
      <p>Total Delivery: {totalDelivery.toFixed(2)}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h3>Grang Total: {grandTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
