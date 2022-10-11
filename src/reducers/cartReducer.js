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
      const existingProduct = state.cart.find((item) => item.id === id);

      if (existingProduct) {
        const existingProductColor = state.cart.find(
          (item) => item.uniqueId === id + color
        );

        const totalAmountInCart = state.cart.reduce((total, item) => {
          if (item.id === id) {
            total += item.amount;
          }

          return total;
        }, 0);

        let newCart;
        if (existingProductColor) {
          const availableQuantity =
            product.stock - (totalAmountInCart - existingProductColor.amount);

          if (availableQuantity === 0) {
            return { ...state };
          }

          newCart = state.cart.map((item) => {
            if (item.uniqueId === id + color) {
              let newAmount = item.amount + amount;
              if (newAmount > availableQuantity) {
                newAmount = availableQuantity;
              }

              return { ...item, amount: newAmount };
            } else {
              return { ...item };
            }
          });
        } else {
          const availableQuantity = product.stock - totalAmountInCart;
          let newAmount = amount;

          if (availableQuantity === 0) {
            return { ...state };
          }

          if (newAmount > availableQuantity) {
            newAmount = availableQuantity;
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
    case REMOVE_CART_ITEM: {
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: newCart };
    }
    case CLEAR_CART: {
      return { ...state, cart: [] };
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default cartReducer;
