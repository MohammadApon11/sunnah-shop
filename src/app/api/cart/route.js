import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getProductByIdsFromDb } from "@/services/products.service";

export const GET = async (request) => {
  try {
    const cookie = request.cookies.get("cart")?.value;
    if (!cookie) return NextResponse.json({ cart: [] });
    const cartObj = JSON.parse(cookie);
    const products = await getProductByIdsFromDb(Object.keys(cartObj));
    const cart = products.map((product) => {
      return {
        ...product,
        quantity: cartObj[product._id.toString()],
      };
    });
    const nextRes = NextResponse.json({ cart });
    return nextRes;
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const action = searchParams.get("action");
    if (!id) throw new Error("Id Not Found");
    const cookie = cookies();
    let cart = {};
    let res = { added: true, message: "added to cart" };
    if (cookie.get("cart")?.value) {
      cart = JSON.parse(cookie.get("cart")?.value);
      if (cart[id]) {
        if (action === "plus") {
          cart[id] += 1;
        } else if (action === "minus") {
          if (cart[id] <= 1) throw new Error("ar koto?");
          cart[id] -= 1;
          res.message = "1 ta Komanu Hoyache";
        } else {
          throw new Error("Already added to cart");
        }
      } else {
        cart[id] = 1;
      }
    } else {
      cart[id] = 1;
    }

    cookie.set({
      name: "cart",
      value: JSON.stringify(cart),
      secure: true,
      httpOnly: true,
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ added: false, message: error.message });
  }
};
