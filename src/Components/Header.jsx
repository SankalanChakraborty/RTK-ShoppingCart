import React from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { hideActions } from "../store/hide";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.cart);
  const cartLength = cart.reduce((sum, item) => sum + item.quantity, 0);
  console.log(typeof cartLength);
  const toggleCart = () => {
    dispatch(hideActions.hide());
  };
  return (
    <>
      <div className="app-header">
        <h3>@reduxjs/toolkit</h3>
        <button className="my-cart-btn" onClick={toggleCart}>
          My Cart
          {cartLength ? <span className="cart-badge">{cartLength}</span> : ""}
        </button>
      </div>
    </>
  );
};

export default Header;
