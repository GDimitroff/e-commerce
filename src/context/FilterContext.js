import React, { useEffect, useContext, useReducer } from 'react';
import { useProductsContext } from './ProductsContext';
import filterReducer from '../reducers/filterReducer';
import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW } from '../actions';

const initialState = {
  allProducts: [],
  filteredProducts: [],
  gridView: true,
};

const FilterContext = React.createContext();

const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(filterReducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterProvider;
