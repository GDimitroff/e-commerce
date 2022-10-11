import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useCartContext } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';

const CartTotals = () => {
  const { totalAmount, shippingFee } = useCartContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            Subtotal: <span>{formatPrice(totalAmount)}</span>
          </h5>
          <h5>
            Shipping fee: <span>{formatPrice(shippingFee)}</span>
          </h5>
          <hr />
          <h4>
            Order total: <span>{formatPrice(totalAmount + shippingFee)}</span>
          </h4>
        </article>
        <Link to="/checkout" className="btn">
          Proceed to checkout
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  article {
    border: 1px solid var(--color-grey-8);
    border-radius: var(--radius);
    padding: 3rem;
  }

  h5 {
    color: var(--color-grey-4);
    display: grid;
    grid-template-columns: 200px 1fr;
  }

  @media (min-width: 776px) {
    justify-content: flex-end;
  }

  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
