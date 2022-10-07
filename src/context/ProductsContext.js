import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';

import productsReducer from '../reducers/productsReducer';
import { PRODUCTS_URL as URL } from '../utils/constants';
import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions';

const initialState = {
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
};

const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_LOADING });

    try {
      const response = await axios(url);
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(URL);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export default ProductsProvider;
