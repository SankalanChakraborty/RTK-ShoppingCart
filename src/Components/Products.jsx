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
        <img src={item.images} alt="" />
        <span>{item.title}</span>
        <button className="price-btn">{"₹" + Math.round(item.price)}</button>
      </div>
      <div className="product-desc">{item.description}</div>
      <button
        className="add-to-cart"
        onClick={() => {
          dispatch(
            cartActions.addItem({
              id: item.id,
              title: item.title,
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
