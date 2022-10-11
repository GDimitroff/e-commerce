import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  INCREASE_CART_ITEM,
  COUNT_CART_TOTALS,
  CLEAR_CART,
} from '../actions';

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, color, amount, product } = action.payload;

      // checking if product exist regardless of color
      const existingProduct = state.cart.find((item) => item.id === id);

      if (existingProduct) {
        // checking if product with this specific color already exist
        const existingProductColor = state.cart.find(
          (item) => item.uniqueId === id + color
        );

        // total amount in cart regardless of the color of the item
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
      const newCart = state.cart.filter(
        (item) => item.uniqueId !== action.payload
      );

      return { ...state, cart: newCart };
    }
    case INCREASE_CART_ITEM: {
      const { id, uniqueId } = action.payload;

      // total amount in cart regardless of the color of the item
      const totalAmountInCart = state.cart.reduce((total, item) => {
        if (item.id === id) {
          total += item.amount;
        }

        return total;
      }, 0);

      const newCart = state.cart.map((product) => {
        if (product.uniqueId === uniqueId) {
          const availableQuantity = product.max - totalAmountInCart;
          if (availableQuantity > 0) {
            return { ...product, amount: product.amount + 1 };
          } else {
            return product;
          }
        } else {
          return product;
        }
      });

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
