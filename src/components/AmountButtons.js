import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Wrapper className="amount-buttons">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  max-width: 120px;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);

  h2 {
    margin: 0;
  }

  button {
    font-family: inherit;
    width: 2rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
  }
`;

export default AmountButtons;
