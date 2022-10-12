import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';

const CartTotals = () => {
  const { totalAmount, shippingFee } = useCartContext();
  const { user, login } = useAuthContext();

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
        {user ? (
          <Link to="/checkout" className="btn">
            Proceed to checkout
          </Link>
        ) : (
          <button type="button" className="btn" onClick={login}>
            Login
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  article {
    border: 1px solid var(--color-grey-8);
    border-radius: var(--radius);
    padding: 3rem;
  }

  h5 {
    display: grid;
    grid-template-columns: 120px 1fr;
    color: var(--color-grey-4);
  }

  @media (min-width: 768px) {
    justify-content: flex-end;

    h5 {
      grid-template-columns: 200px 1fr;
    }
  }

  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
