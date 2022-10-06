import styled from 'styled-components';

import { Breadcrumbs } from '../components';

const CheckoutPage = () => {
  return (
    <main>
      <Breadcrumbs title="Checkout" />
      <Wrapper>
        <h1>checkout here</h1>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - (5vh + 17rem));
`;

export default CheckoutPage;
