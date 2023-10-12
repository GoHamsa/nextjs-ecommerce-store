import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default function CartPage() {
  /*   const sumArray = [a, b];
  const subSum = sumArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  ); */
  // 1. get the current cookie
  const products = getProducts();
  const productsCommentsCookie = getCookie('productsComments');
  // 2. parse the cookie value

  // !productsCommentsCookie <=> productsCommentsCookie === undefined
  const productComments = !productsCommentsCookie
    ? // Case A: cookie is undefined
      // we need to create a new cookie with an empty array
      []
    : parseJson(productsCommentsCookie);

  // Combine the cookie object with item object --> go with .map through the array --> try to .find if the item.id is in both arrays, when its found create a new variable and return it, otherwise return undefined
  const productsWithComments = products
    .map((product) => {
      const matchingComment = productComments.find((commentObject) => {
        return product.id === commentObject.id;
      });

      return { ...product, comment: matchingComment?.comment };
    })

    // Filter out items with undefined quantity --> Display only added items in cart
    .filter((product) => product.comment !== undefined);

  return (
    <div>
      <h1>Products in Cart</h1>
      <div>
        {productsWithComments.map((product) => {
          return (
            <div key={`product-div-${product.id}`}>
              <Link href={`/products/${product.id}`}>
                {' '}
                <h1>{product.name}</h1>
              </Link>
              <Image
                src={`/images/${product.image}`}
                alt={product.name}
                width={200}
                height={200}
              />
              <p>
                Quantity: {product.comment} * Price: {product.price} $ ={' '}
                {product.price * product.comment} $
              </p>
              {/* <p> {subSum} </p> */}
              <p> </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* // my first approach to create sub total. BUT .reduce can only add, i was attempting to multiply
const productSubtotal = products.map((product) => {

  const a = product.price;
  const b = product.comment;
  const subArray = [a, b];
  const sumQuantity = subArray.reduce(accumulator, currentValue) => accumulator + currentValue, 0,
}); */
/*
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10 */
