import styled from 'styled-components';

import { useCartContext } from '../context/CartContext';
import AmountButtons from './AmountButtons';
import { formatPrice } from '../utils/helpers';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {};

  const decrease = () => {};

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <p className="color">
            Color: <span style={{ background: color }}></span>
          </p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className="btn-remove"
        onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 120px auto auto;
  grid-template-rows: 75px;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  .subtotal,
  .price,
  img {
    display: none;
  }

  .name {
    text-transform: capitalize;
  }

  h5 {
    font-size: 1.2rem;
  }

  .color {
    font-size: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    letter-spacing: var(--spacing);
    color: var(--color-grey-5);

    span {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      background: var(--color-grey-1);
      margin-left: 0.6rem;
      border-radius: var(--radius);
    }
  }

  .price-small {
    color: var(--color-primary-1);
  }

  .btn-remove {
    color: var(--color-grey-9);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--color-red-dark);
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 1.2rem;
    cursor: pointer;
    transition: var(--transition);
  }

  .btn-remove:hover,
  .btn-remove:active {
    background: var(--color-red-light);
  }

  @media (min-width: 576px) {
    grid-template-columns: 220px auto auto;
    margin-bottom: 2rem;

    .title {
      display: grid;
      grid-template-columns: 180px auto;
      grid-template-rows: 75px;
      gap: 1rem;
    }

    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: var(--radius);
      object-fit: cover;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 300px 1fr 1fr 1fr auto;
    align-items: center;
    justify-items: center;
    grid-template-rows: 75px;

    img {
      height: 100%;
    }

    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }

    .color {
      font-size: 1.2rem;
    }

    .name {
      font-size: 1.4rem;
    }

    .subtotal {
      display: block;
      font-weight: 500;
      font-size: 1.4rem;
      margin-bottom: 0;
      color: var(--color-grey-5);
    }

    .price-small {
      display: none;
    }

    .price {
      display: block;
      font-weight: 500;
      font-size: 1.4rem;
      color: var(--color-primary-1);
    }
  }
`;

export default CartItem;
