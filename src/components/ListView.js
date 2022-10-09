import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { formatPrice } from '../utils/helpers';

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, name, image, price, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description.substring(0, 250)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 240px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 0.6rem;
    text-transform: capitalize;
  }

  .price {
    color: var(--color-primary-1);
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  .btn {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }

  @media (min-width: 768px) {
    img {
      width: 300px;
    }
  }

  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
