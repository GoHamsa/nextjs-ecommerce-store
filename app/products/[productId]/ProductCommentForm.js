'use client';
import { useState } from 'react';
import { createOrUpdateComment } from './actions';

export default function ProductCommentForm(props) {
  const [comment, setComment] = useState(0);

  const handleAddToCart = async () => {
    await createOrUpdateComment(props.productId, comment);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        type="number"
        value={comment}
        onChange={(event) => setComment(Number(event.currentTarget.value))}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </form>
  );
}
