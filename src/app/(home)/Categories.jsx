import React from "react";
import SingleCategory from "./SingleCategory";
import getCategories from "@/utils/getCategories";

const Categories = async () => {
  const categories = await getCategories();
  return (
    <div className="mt-14">
      <h1 className="mb-5 text-3xl font-semibold">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-5">
        {categories?.map((category) => (
          <SingleCategory category={category} key={category._id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
