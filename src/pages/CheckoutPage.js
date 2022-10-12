import styled from 'styled-components';

import { Breadcrumbs } from '../components';

const CheckoutPage = () => {
  return (
    <main>
      <Breadcrumbs title="Checkout" />
      <Wrapper className="section">
        <div className="checkout">
          <h1>Checkout</h1>
          <p>Stripe integration will be here someday in the future...</p>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  min-height: calc(
    100vh -
      (
        var(--navbar-height) + var(--breadcrumbs-height) + var(--footer-height) +
          10rem
      )
  );

  display: grid;
  place-items: center;

  .checkout {
    color: var(--color-grey-9);
    padding: 4rem;
    text-align: center;
    background-color: var(--color-green-light);
    border-radius: var(--radius);

    h1 {
      margin-bottom: 2rem;
    }
  }
`;

export default CheckoutPage;
