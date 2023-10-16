'use server';

// Case A: cookie is undefined
// Case B: cookie is defined but have the product id
// Case C: cookie is defined but doesn't have the product id

import { cookies } from 'next/headers';
import { getCookie, PRODUCTS_IN_CART_COOKIE_NAME } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateQuantity(productId, quantity) {
  // 1. get the current cookie
  const productsQuantitysCookie = getCookie(PRODUCTS_IN_CART_COOKIE_NAME);
  // 2. parse the cookie value

  // !productsQuantitysCookie <=> productsQuantitysCookie === undefined
  const productQuantitys = !productsQuantitysCookie
    ? // Case A: cookie is undefined
      // we need to create a new cookie wi0th an empty array
      []
    : parseJson(productsQuantitysCookie);

  // 3. we edit the cookie value
  // We get the the object for the product on cookies or undefined
  const productToUpdate = productQuantitys.find((productQuantity) => {
    return productQuantity.id === productId;
  });
  // Case B: cookie is defined and product id already exists!
  // if we are in product id = 1
  if (productToUpdate) {
    productToUpdate.quantity += quantity;
  } else {
    // Case C: cookie is defined and product id doesn't exist!
    productQuantitys.push({
      id: productId,
      quantity: quantity,
    });
  }

  // 4. we override the cookie
  await cookies().set(
    PRODUCTS_IN_CART_COOKIE_NAME,
    JSON.stringify(productQuantitys),
  );
}
