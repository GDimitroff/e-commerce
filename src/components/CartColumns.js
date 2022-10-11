import styled from 'styled-components';

const CartColumns = () => {
  return (
    <Wrapper>
      <div className="content">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;

    .content {
      display: grid;
      grid-template-columns: 300px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;

      h5 {
        font-size: 1.4rem;
        font-weight: 400;
        text-transform: capitalize;
        color: var(--color-grey-5);
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default CartColumns;
