import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Wrapper>
      <section>
        <h1>404</h1>
        <h3>Sorry, this resource cannot be find...</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: calc(100vh - (var(--navbar-height) + var(--footer-height)));
  color: var(--color-grey-1);
  background: var(--color-grey-8);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 14rem;
  }

  h3 {
    text-transform: none;
    margin-bottom: 3rem;
    color: var(--color-grey-4);
  }
`;

export default ErrorPage;
