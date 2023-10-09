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
          <Link href={`/products/${product.id}`}>{product.name}</Link>
          <Image
            src={`/images/${product.image}`}
            alt={product.name}
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
}

/*
const products = [
  {
    id: '1',
    name: 'cookie shoko',
    price: 10,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZZ0fB_oL9_KmNMEdikYIeSV6_FIrOX0Q3Hp08Vs77tgna5mfSK-Jhn1jHKvOng4GRNM&usqp=CAU',
  },
  {
    id: '2',
    name: 'cookie standard',
    price: 15,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXOdMuNYxvoar24s3fsnh6b4Ko-ASUsyXx_SelGMlNx9zuQ4N6A4oypYudDPdh--43FU&usqp=CAU',
  },
  // add more products similarly
];

export default function ProductsPage() {
  return <div>Products Page</div>;
}
*/
