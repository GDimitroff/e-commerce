import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW } from '../actions';

const filterReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
      };
    }
    case SET_GRIDVIEW: {
      return {
        ...state,
        gridView: true,
      };
    }
    case SET_LISTVIEW: {
      return {
        ...state,
        gridView: false,
      };
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default filterReducer;
