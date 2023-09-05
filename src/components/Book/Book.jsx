// import React from 'react';
import "./Book.css";

const Book = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, img, publisher, price } = props.book;
  // eslint-disable-next-line react/prop-types
  const handelAddToCart = props.handelAddToCart;

  return (
    <div className="single-book">
      <img src={img} alt="" />
      <div className="book-info">
        <h2>{title}</h2>
        {/* <h3>{author[0]}</h3>
        <h3>{author[1]}</h3> */}

        <h4>Publidher: {publisher.name}</h4>
        <p>Price: {price}</p>
      </div>
      <button
        className="button-add"
        onClick={() => handelAddToCart(props.book)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Book;
