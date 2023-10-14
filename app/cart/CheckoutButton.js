'use client';

export default function CheckoutButton() {
  function redirectToCheckout() {
    window.location.pathname = '/checkout';
  }
  return <button onClick={redirectToCheckout}> Checkout </button>;
}
