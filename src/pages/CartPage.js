import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useCartContext } from '../context/CartContext';
import { CartContent, Breadcrumbs } from '../components';

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <EmptyCartWrapper className="section">
        <div className="empty">
          <h2>Your cart is empty...</h2>
          <Link to="/products" className="btn">
            Fill it
          </Link>
        </div>
      </EmptyCartWrapper>
    );
  }

  return (
    <main>
      <Breadcrumbs title="Cart" />
      <Wrapper className="section">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  min-height: calc(
    100vh -
      (
        var(--navbar-height) + var(--breadcrumbs-height) + var(--footer-height) +
          10rem
      )
  );
`;

const EmptyCartWrapper = styled.main`
  min-height: calc(
    100vh - (var(--navbar-height) + var(--footer-height) + 10rem)
  );
  display: grid;
  place-items: center;

  .empty {
    text-align: center;

    h2 {
      margin-bottom: 2rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
