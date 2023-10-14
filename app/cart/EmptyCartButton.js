'use client';

import { emptyCart } from './actions';

export default function EmptyCartButton() {
  async function removeAllProducts() {
    console.log('removeAllProducts');
    await emptyCart();
  }
  return <button onClick={removeAllProducts}> Remove all products </button>;
}
