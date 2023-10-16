'use server';

import { PRODUCTS_IN_CART_COOKIE_NAME, setCookie } from '../../util/cookies';

export async function emptyCart() {
  await setCookie(PRODUCTS_IN_CART_COOKIE_NAME, JSON.stringify([]));
  console.log('emptyCart');
}
