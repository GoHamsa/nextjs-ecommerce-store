'use server';

// Case A: cookie is undefined
// Case B: cookie is defined but have the product id
// Case C: cookie is defined but doesn't have the product id

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateComment(productId, comment) {
  // 1. get the current cookie
  const productsCommentsCookie = getCookie('productsComments');
  // 2. parse the cookie value

  // !productsCommentsCookie <=> productsCommentsCookie === undefined
  const productComments = !productsCommentsCookie
    ? // Case A: cookie is undefined
      // we need to create a new cookie wi0th an empty array
      []
    : parseJson(productsCommentsCookie);

  // 3. we edit the cookie value
  // We get the the object for the product on cookies or undefined
  const productToUpdate = productComments.find((productComment) => {
    return productComment.id === productId;
  });
  // Case B: cookie is defined and product id already exists!
  // if we are in product id = 1
  if (productToUpdate) {
    productToUpdate.comment += comment;
  } else {
    // Case C: cookie is defined and product id doesn't exist!
    productComments.push({
      id: productId,
      comment: comment,
    });
  }

  // 4. we override the cookie
  await cookies().set('productsComments', JSON.stringify(productComments));
}
