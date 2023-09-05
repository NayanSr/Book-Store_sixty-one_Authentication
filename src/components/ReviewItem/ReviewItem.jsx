// import React from 'react';
import "./ReviewItem.css";

// eslint-disable-next-line react/prop-types
// const ReviewItem = ({sb, handelRemovefromCart}) => {  // direct destructure
const ReviewItem = (props) => {
  const { id, img, title, quantity, genre } = props.sb;
  const handelRemovefromCart = props.handelRemovefromCart;
  // eslint-disable-next-line react/prop-types
  // console.log(img);
  return (
    <div className="review-item-child">
      <img src={img} alt="image:" />
      <div className="review-info">
        <p style={{ fontSize: "30px", color: "black", margin: "2px 0px" }}>
          Name:{title}
        </p>
        <p style={{ fontSize: "20px", color: "black", margin: "2px 0px" }}>
          Quantity:{quantity}
        </p>
        <p style={{ fontSize: "20px", color: "black", margin: "2px 0px" }}>
          Genre:{genre}
        </p>
      </div>
      <button
        onClick={() => handelRemovefromCart(id)}
        className="item-delete-button"
      >
        Delete
      </button>
    </div>
  );
};

export default ReviewItem;
