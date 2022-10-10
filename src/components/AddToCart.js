import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

import { useCartContext } from '../context/CartContext';
import AmountButtons from './AmountButtons';

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((prevAmount) => {
      let tempAmount = prevAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }

      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((prevAmount) => {
      let tempAmount = prevAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }

      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>Colors: </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: color }}
                className={`${
                  mainColor === color ? 'color-btn active' : 'color-btn'
                }`}
                onClick={() => setMainColor(color)}>
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, mainColor, amount, product)}>
          Add to Cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    font-size: 1.4rem;
    margin-bottom: 2rem;

    span {
      text-transform: capitalize;
      font-weight: 700;
    }

    div {
      display: flex;
    }
  }

  .color-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    opacity: 0.5;
    cursor: pointer;

    svg {
      font-size: 1rem;
      color: var(--color-grey-9);
    }
  }

  .active {
    opacity: 1;
  }

  .btn-container {
    margin-top: 1rem;
  }

  .btn {
    width: 140px;
    text-align: center;
    margin-top: 0.6rem;
  }
`;

export default AddToCart;
