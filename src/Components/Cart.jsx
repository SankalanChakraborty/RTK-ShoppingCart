import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.cart);
  const cartLength = cart.reduce((sum, item) => sum + item.quantity, 0);
  console.log(cart);

  return (
    <div className="app-cart">
      {cartLength ? (
        <h2>Your Shopping Cart</h2>
      ) : (
        <h2>Shopping Cart is empty !!</h2>
      )}
      {cart.map((cartItem) => (
        <>
          <div key={cartItem.id} className="cart-inner">
            <div className="upper">
              <span>{cartItem.title}</span>
              <span>
                ₹{Math.round(cartItem.price) * cartItem.quantity}{" "}
                <em>{"₹" + Math.round(cartItem.price) + " / item"}</em>
              </span>
            </div>
            <div className="lower">
              <span className="quantity">x{cartItem.quantity}</span>
              <div className="actionbtns">
                <button
                  onClick={() => {
                    dispatch(cartActions.addItem(cartItem));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch(cartActions.removeItem(cartItem));
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Cart;
