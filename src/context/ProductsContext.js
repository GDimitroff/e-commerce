import React, { useCallback, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';

import productsReducer from '../reducers/productsReducer';
import { PRODUCTS_URL as URL } from '../utils/constants';
import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from '../actions';

const initialState = {
  productsLoading: true,
  productsError: false,
  products: [],
  featuredProducts: [],
  productLoading: true,
  productError: false,
  product: {},
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

  const fetchProduct = useCallback(async (url) => {
    dispatch({ type: GET_PRODUCT_LOADING });

    try {
      const response = await axios(url);
      const product = response.data;
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: product });
    } catch (error) {
      dispatch({ type: GET_PRODUCT_ERROR });
    }
  }, []);

  useEffect(() => {
    fetchProducts(URL);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, fetchProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export default ProductsProvider;
