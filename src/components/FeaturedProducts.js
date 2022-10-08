import styled from 'styled-components';

import { useProductsContext } from '../context/ProductsContext';
import Error from './Error';
import Loading from './Loading';
import Product from './Product';

const FeaturedProducts = () => {
  const {
    productsLoading: loading,
    productsError: error,
    featuredProducts: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div>
        <h2>Featured Products</h2>
        <div className="underline"></div>
        <div className="featured">
          {featured.slice(0, 3).map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem;
  background-color: var(--color-grey-9);
  border-radius: var(--radius);

  h2,
  .underline {
    text-align: center;
    margin: 0 auto;
  }

  .featured {
    display: grid;
    gap: 3rem;
    margin: 4rem auto;

    img {
      height: 225px;
    }
  }

  @media (min-width: 576px) {
    padding: 5rem;

    .featured {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
  }
`;

export default FeaturedProducts;
