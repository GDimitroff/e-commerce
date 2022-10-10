import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, color, amount, product } = action.payload;
      const existingGroupItems = state.cart.find((item) => item.id === id);

      if (existingGroupItems) {
        const existingItem = state.cart.find(
          (item) => item.uniqueId === id + color
        );

        const totalAmountInCart = state.cart.reduce((total, item) => {
          if (item.id === id) {
            total += item.amount;
          }

          return total;
        }, 0);

        let newCart;
        if (existingItem) {
          const availableSpace =
            product.stock - (totalAmountInCart - existingItem.amount);

          if (availableSpace === 0) {
            return { ...state };
          }

          newCart = state.cart.map((item) => {
            if (item.uniqueId === id + color) {
              let newAmount = item.amount + amount;
              if (newAmount > availableSpace) {
                newAmount = availableSpace;
              }

              return { ...item, amount: newAmount };
            } else {
              return { ...item };
            }
          });
        } else {
          const availableSpace = product.stock - totalAmountInCart;
          let newAmount = amount;

          if (availableSpace === 0) {
            return { ...state };
          }

          if (newAmount > availableSpace) {
            newAmount = availableSpace;
          }

          let newItem = {
            id,
            uniqueId: id + color,
            name: product.name,
            color,
            amount: newAmount,
            image: product.images[0].url,
            price: product.price,
            max: product.stock,
          };

          newCart = [...state.cart, newItem];
        }

        return { ...state, cart: newCart };
      } else {
        let newItem = {
          id,
          uniqueId: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };

        return { ...state, cart: [...state.cart, newItem] };
      }
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default cartReducer;
