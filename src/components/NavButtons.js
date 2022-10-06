import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
  AiOutlineUserDelete,
} from 'react-icons/ai';

const CartButtons = () => {
  return (
    <Wrapper className="nav-buttons-wrapper">
      <Link to="cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <AiOutlineShoppingCart />
          <span className="cart-value">12</span>
        </span>
      </Link>
      <button type="button" className="auth-btn">
        Login <AiOutlineUserAdd />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  .cart-btn {
    font-size: 1.6rem;
    letter-spacing: var(--small-spacing);
    color: var(--color-grey-6);
    display: flex;
    align-items: center;
    padding: 0.6rem 0;
    border-bottom: 2px solid transparent;
    transition: var(--transition);

    &:hover {
      border-bottom: 2px solid var(--color-primary-5);
    }
  }

  .cart-container {
    display: flex;
    align-items: center;
    position: relative;

    svg {
      width: 2.2rem;
      height: 2.2rem;
      margin-left: 5px;
    }
  }

  .cart-value {
    position: absolute;
    top: -12px;
    right: -14px;
    background: var(--color-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.2rem;
    color: var(--color-grey-1);
    font-weight: 700;
    padding: 12px;
  }

  .auth-btn {
    font-family: inherit;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    color: var(--color-grey-6);
    letter-spacing: var(--small-spacing);
    padding: 0.6rem 0;
    margin-left: 1.4rem;
    border-bottom: 2px solid transparent;
    transition: var(--transition);
    cursor: pointer;

    &:hover {
      border-bottom: 2px solid var(--color-primary-5);
    }

    svg {
      width: 2.2rem;
      height: 2.2rem;
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
