import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';

export default function ProductsPage() {
  const products = getProducts();
  return (
    <div>
      <h1>Available Products</h1>
      {products.map((product) => (
        <div key={`product-div-${product.id}`}>
          <Link href={`/products/${product.id}`}>
            <h2>{product.name}</h2>
            <Image
              src={`/images/${product.image}`}
              alt={product.name}
              width={200}
              height={200}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
