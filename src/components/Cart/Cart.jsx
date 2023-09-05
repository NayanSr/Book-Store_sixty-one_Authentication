// import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // eslint-disable-next-line react/prop-types
  const cart = props.cart;

  let total = 0;
  let totalDelivery = 0;
  let quantity = 0;
  for (const book of cart) {
    // console.log(book);
    book.quantity = book.quantity || 1;
    total = total + parseInt(book.price) * book.quantity;
    totalDelivery = totalDelivery + parseInt(book.delivery) * book.quantity;
    quantity = book.quantity + quantity;
  }
  // console.log(cart);

  const tax = total * (7 / 100);
  const grandTotal = total + totalDelivery + tax;

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>selected Item : {quantity}</p>
      <p>Total Price:{total.toFixed(2)}</p>
      <p>Total Delivery: {totalDelivery.toFixed(2)}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h3>Grang Total: {grandTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
