import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useCartContext } from '../context/CartContext';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.uniqueId} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="btn">
          continue shopping
        </Link>
        <button type="button" className="btn btn-alternate" onClick={clearCart}>
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default CartContent;
