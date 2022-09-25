import React from "react";
import "./Product.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, cartClick }) => {
  const { img, seller, name, price, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">Name: {name}</p>
        <div className="more-info">
          <p>Price: {price} $</p>
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings} stars</p>
        </div>
      </div>
      <button onClick={() => cartClick(product)} className="btn-add-to-cart">
        <p id="btn-cart-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
