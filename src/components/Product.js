import styled from 'styled-components';

import { formatPrice } from '../utils/helpers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--color-grey-1);
    border-radius: var(--radius);
  }

  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--color-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;

    svg {
      font-size: 2rem;
      color: var(--color-grey-10);
    }
  }

  .container:hover img {
    opacity: 0.5;
  }

  .container:hover .link {
    opacity: 1;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  footer h5 {
    font-size: 1.6rem;
    text-transform: capitalize;
  }

  footer p {
    font-weight: 700;
    letter-spacing: var(--spacing);
    color: var(--color-primary-1);
  }
`;

export default Product;
