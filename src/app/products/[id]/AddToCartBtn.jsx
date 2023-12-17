"use client";
import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const AddToCartBtn = () => {
  let cart = [];
//   isLoading;
  const isAlready = cart.findIndex((pd) => pd._id === id);
  const handleAddToCart = async (id) => {};
  return (
    <button
      onClick={() => handleAddToCart(id)}
      className="btn btn-primary mt-4"
    //   disabled={isAlready || isLoading}
    >
      <MdOutlineAddShoppingCart /> Add To Cart
      {/* {isAlready ? "Already added" : "Add To Cart"} */}
    </button>
  );
};

export default AddToCartBtn;
