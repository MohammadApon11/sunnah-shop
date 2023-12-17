import getSingleProduct from "@/utils/getSingeProduct";
import React from "react";
import AddToCartBtn from "./AddToCartBtn";

const ProductDetails = async ({ params: { id } }) => {
  const product = await getSingleProduct(id);
  return (
    <div>
      <h1>{product.name}</h1>
      <AddToCartBtn id={id} />
    </div>
  );
};

export default ProductDetails;
