import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart-body">
      <p>Order Summery</p>
      <p>Cart Items: {cart.length}</p>
      <p>Total Price: {cart.price}</p>
    </div>
  );
};

export default Cart;
