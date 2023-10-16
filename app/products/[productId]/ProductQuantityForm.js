'use client';
import { useState } from 'react';
import { createOrUpdateQuantity } from './actions';

export default function ProductQuantityForm(props) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    await createOrUpdateQuantity(props.productId, quantity);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => setQuantity(Number(event.currentTarget.value))}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </form>
  );
}
