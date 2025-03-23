import React from "react";
import "./Products.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

const Products = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="products
    "
    >
      <div className="product-up">
        <span>{item.name}</span>
        <button className="price-btn">{"₹" + item.price}</button>
      </div>
      <div className="product-desc">This is the first product.</div>
      <button
        className="add-to-cart"
        onClick={() => {
          dispatch(
            cartActions.addItem({
              id: item.id,
              name: item.name,
              price: item.price,
              quantity: 1,
            })
          );
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Products;
