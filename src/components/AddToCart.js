import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

import AmountButtons from './AmountButtons';

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(0);

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
      <div className="btn-container"></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    font-size: 1.4rem;
    margin-bottom: 1rem;

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
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;

export default AddToCart;
