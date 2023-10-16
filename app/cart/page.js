import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie, PRODUCTS_IN_CART_COOKIE_NAME } from '../../util/cookies';
import { parseJson } from '../../util/json';
import CheckoutButton from './CheckoutButton';
import EmptyCartButton from './EmptyCartButton';

export default function CartPage() {
  /*   const sumArray = [a, b];
  const subSum = sumArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  ); */
  // 1. get the current cookie
  const products = getProducts();
  // [{"id":1,"quantity":1},{"id":2,"quantity":2}]
  const productsQuantitysCookie = getCookie(PRODUCTS_IN_CART_COOKIE_NAME);
  // 2. parse the cookie value

  // !productsQuantitysCookie <=> productsQuantitysCookie === undefined
  const productQuantitys = !productsQuantitysCookie
    ? // Case A: cookie is undefined
      // we need to create a new cookie with an empty array
      []
    : parseJson(productsQuantitysCookie);

  // Combine the cookie object with item object --> go with .map through the array --> try to .find if the item.id is in both arrays, when its found create a new variable and return it, otherwise return undefined
  const productsWithQuantitys = products
    .map((product) => {
      const matchingQuantity = productQuantitys.find((quantityObject) => {
        return product.id === quantityObject.id;
      });

      return { ...product, quantity: matchingQuantity?.quantity };
    })

    // Filter out items with undefined quantity --> Display only added items in cart
    .filter((product) => product.quantity !== undefined);

  const initialValue = 0;
  const totalPrice = productsWithQuantitys.reduce((previousValue, product) => {
    const price = product.price * product.quantity;
    return previousValue + price;
  }, initialValue);

  return (
    <div>
      <h1>Products in Cart</h1>
      <div>
        {productsWithQuantitys.map((product) => {
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
                Quantity: {product.quantity} * Price: {product.price} $ ={' '}
                {product.price * product.quantity} $
              </p>
              {/* <p> {subSum} </p> */}
              <p> </p>
            </div>
          );
        })}
      </div>

      {productsWithQuantitys.length > 0 ? (
        <>
          <div> Total Price {totalPrice} </div>
          <EmptyCartButton />
          <br />
          <CheckoutButton />
        </>
      ) : (
        <div> No products in cart </div>
      )}
    </div>
  );
}
