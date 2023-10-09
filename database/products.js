// database/products.js
const products = [
  { id: 1, name: 'Plain', price: 20, image: 'plain.png' },
  { id: 2, name: 'Chocolate', price: 30, image: 'chocolate.png' },
  { id: 3, name: "m&m's", price: 25, image: 'mnm.png' },
  { id: 4, name: 'Halloween', price: 15, image: 'halloween.png' },
];

export const getProducts = () => {
  return products;
};

export const getSingleProduct = (id) => {
  return products.find((product) => product.id === id);
};
