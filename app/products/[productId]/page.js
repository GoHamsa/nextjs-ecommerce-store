import Image from 'next/image';
import { getProductById } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import ProductCommentForm from './ProductCommentForm';

export default function SingleProductPage(props) {
  const product = getProductById(Number(props.params.productId));
  const productsCommentsCookie = getCookie('productsComments');

  const productComments = !productsCommentsCookie
    ? []
    : parseJson(productsCommentsCookie);

  const productCommentToDisplay = productComments.find((productComment) => {
    return productComment.id === product.id;
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
      <div>{productCommentToDisplay?.comment}</div>
      <ProductCommentForm productId={product.id} />
    </div>
  );
}
