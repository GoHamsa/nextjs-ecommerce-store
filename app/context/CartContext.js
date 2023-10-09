import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  cart: [],
};

// Create context
const CartContext = createContext();

// Reducer function to update state based on action
const cartReducer = (state, action) => {
  switch (action.type) {
    // cases to handle add-to-cart, remove, update, etc.
    // ...
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

// Create a provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Actions to dispatch changes
  const addToCart = (item) => {
    dispatch({ type: 'ADD', item });
  };

  // ... more actions as per requirement

  return (
    <CartContext.Provider value={{ state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// ... (rest of the code)

export const CartContext = createContext();
export const CartDispatchContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

// ... (potentially export helper hooks as well)
