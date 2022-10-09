import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
} from '../actions';

const filterReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      let maxPrice = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);

      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filters: { ...state.filters, maxPrice },
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
    case UPDATE_SORT: {
      return {
        ...state,
        sort: action.payload,
      };
    }
    case SORT_PRODUCTS: {
      const { sort, filteredProducts } = state;
      let sortedProducts = [...filteredProducts];

      if (sort === 'price-lowest') {
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
      }

      if (sort === 'price-highest') {
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
      }

      if (sort === 'name-a') {
        sortedProducts = sortedProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      if (sort === 'name-z') {
        sortedProducts = sortedProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      return { ...state, filteredProducts: sortedProducts };
    }
    case UPDATE_FILTERS: {
      const { name, value } = action.payload;

      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };
    }
    case FILTER_PRODUCTS: {
      //TODO:
      return { ...state };
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default filterReducer;
