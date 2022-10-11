import React, { useEffect, useContext, useReducer } from 'react';
import cartReducer from '../reducers/cartReducer';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  INCREASE_CART_ITEM,
  DECREASE_CART_ITEM,
  COUNT_CART_TOTALS,
  CLEAR_CART,
} from '../actions';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 534,
};

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  const removeItem = (uniqueId) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: uniqueId });
  };

  const increaseAmount = (id, uniqueId) => {
    dispatch({ type: INCREASE_CART_ITEM, payload: { id, uniqueId } });
  };

  const decreaseAmount = (uniqueId) => {
    dispatch({ type: DECREASE_CART_ITEM, payload: uniqueId });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartProvider;
