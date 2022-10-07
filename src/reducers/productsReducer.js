import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions';

const productsReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        productsLoading: true,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      const featuredProducts = action.payload.filter((product) => {
        return product.featured === true;
      });

      return {
        ...state,
        productsLoading: false,
        products: action.payload,
        featuredProducts,
      };
    }
    case GET_PRODUCTS_ERROR: {
      return { ...state, productsLoading: false, productsError: true };
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default productsReducer;
