import DbConnect from "./DbConnect";
import "server-only";

const getCategoriesFromDb = async () => {
  const db = await DbConnect();
  const categoriesCollection = db.collection("categories");
  return categoriesCollection.find({}).toArray();
};

export default getCategoriesFromDb;
