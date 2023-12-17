import { getProductByIdFromDb } from "@/services/products.service";
import { cache } from "react";
import "server-only";

const getSingleProduct = cache(getProductByIdFromDb);

export default getSingleProduct;
