import styled from 'styled-components';

import { Filters, ProductList, Sort, Breadcrumbs } from '../components';

const ProductsPage = () => {
  return (
    <main>
      <Breadcrumbs title="Products" />
      <Wrapper className="section">
        <div className="products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
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

  .products {
    display: grid;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
