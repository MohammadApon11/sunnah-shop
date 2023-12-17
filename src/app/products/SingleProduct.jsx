import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingleProduct = ({ product }) => {
  const { name, imageUrl, _id } = product;
  return (
    <Link href={`/products/${_id}`}>
      <div className="card card-compact bg-base-100 shadow-2xl h-full justify-between">
        <figure>
          <Image
            src={imageUrl}
            alt={name}
            width={300}
            height={300}
            className="max-h-[150px] sm:max-h-[250px] xl:max-h-[300px] object-cover w-auto"
          />
        </figure>
        <div className="card-body flex-grow-0">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
