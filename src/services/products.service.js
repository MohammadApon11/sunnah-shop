import { ObjectId } from "mongodb";
import DbConnect from "./DbConnect";
import "server-only";

export const getProductsFromDb = async (categoryId) => {
  const db = await DbConnect();
  const productsCollection = db.collection("products");
  const query = {};
  if (categoryId) {
    query.categoryId = categoryId;
  }
  return productsCollection.find(query).toArray();
};

export const getProductByIdFromDb = async (id) => {
  const db = await DbConnect();
  const productsCollection = db.collection("products");
  const query = {
    // this is right way but i don't insert data with ObjectId so that why i try antoher way
    // _id:  new ObjectId(id),

    _id: id,
  };
  return productsCollection.findOne(query);
};
