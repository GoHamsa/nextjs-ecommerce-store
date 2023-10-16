import Image from 'next/image';
import { getProductById } from '../../../database/products';
import { getCookie, PRODUCTS_IN_CART_COOKIE_NAME } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import ProductQuantityForm from './ProductQuantityForm';

export default function SingleProductPage(props) {
  const product = getProductById(Number(props.params.productId));
  const productsQuantitysCookie = getCookie(PRODUCTS_IN_CART_COOKIE_NAME);

  const productQuantitys = !productsQuantitysCookie
    ? []
    : parseJson(productsQuantitysCookie);

  const productQuantityToDisplay = productQuantitys.find((productQuantity) => {
    return productQuantity.id === product.id;
  });

  return (
    <div>
      <h1>{product.name}</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width={200}
        height={200}
      />
      <p>Price: ${product.price}</p>
      <div>{productQuantityToDisplay?.quantity}</div>
      <ProductQuantityForm productId={product.id} />
    </div>
  );
}
