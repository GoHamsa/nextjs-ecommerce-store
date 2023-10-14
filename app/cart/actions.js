'use server';

import { setCookie } from '../../util/cookies';

export async function emptyCart() {
  await setCookie('productsComments', JSON.stringify([]));
  console.log('emptyCart');
}
