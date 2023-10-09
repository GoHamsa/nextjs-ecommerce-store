import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getSingleProduct } from '../../../database/products';

export default function SingleProductPage({ params }) {
  const product = getSingleProduct(Number(params.productId));

  if (!product) {
    return notFound();
  }

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
    </div>
  );
}
