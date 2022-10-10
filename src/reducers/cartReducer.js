import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cartReducer = (state, action) => {
  switch (action.type) {
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default cartReducer;
