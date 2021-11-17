import React from "react";

const BookItems = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>Author: {props.authors}</h3>
    </div>
  );
};

export default BookItems;
