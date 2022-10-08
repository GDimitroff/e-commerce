import React, { useEffect, useContext, useReducer } from 'react';
import { useProductsContext } from './ProductsContext';
import filterReducer from '../reducers/filterReducer';
import { LOAD_PRODUCTS } from '../actions';

const initialState = {
  allProducts: [],
  filteredProducts: [],
};

const FilterContext = React.createContext();

const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(filterReducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterProvider;
