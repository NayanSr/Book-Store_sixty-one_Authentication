// import React from 'react';
import "./Book.css";

const Book = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, img, author, publisher, price } = props.book;
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
      <button>Add to cart</button>
    </div>
  );
};

export default Book;
