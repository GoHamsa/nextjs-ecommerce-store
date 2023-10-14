import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: { default: 'Home | HG', template: '%s | HG' },
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  const productsCommentsCookie = getCookie('productsComments');
  const productsInCart = !productsCommentsCookie
    ? []
    : parseJson(productsCommentsCookie);

  const initialValue = 0;
  const totalQuantity = productsInCart.reduce((previousValue, product) => {
    return previousValue + product.comment;
  }, initialValue);

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div>
            <Link href="/">Home</Link>
            <Link href="http://localhost:3000/products">Products</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/checkout">Checkout</Link>
            <Link href="/thankyou">Thank You!</Link>
            <Link href="/about">About</Link>
          </div>
          {totalQuantity}
          {/* {Math.floor(Math.random() * 10)} */}
        </nav>
        {children}
      </body>
    </html>
  );
}
